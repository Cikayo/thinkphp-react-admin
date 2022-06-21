import { makeAutoObservable, runInAction } from "mobx"
import { getToken, setToken, removeToken } from '@/utils/auth'
import { userLogin, loginByToken, userLogout } from '@/api'
import { post, get } from '@/utils/request';

const USER_NAME_KEY = 'user_name'

class User {

    name = getToken(USER_NAME_KEY) // 用户名
    token = getToken() // 登录成功后，存储的token
    permissions = [] // 用户的权限列表，可访问的路由等信息
    isError = false // 登录是否存在问题

    constructor() {
        makeAutoObservable(this)
    }

    async login(data, cb) {
        await post(userLogin, data).then(res => {
            let { token } = res.data;
            runInAction(() => {
                this.name = data.user_name;
                this.token = token;
            })
            setToken(data.user_name, USER_NAME_KEY)
            setToken(token)
        }).catch(err => {
            runInAction(() => {
                this.name = '';
                this.token = '';
            })
            removeToken()
        })
    }

    async initAuthList() {
        await get(loginByToken).then(res => {
            runInAction(() => {
                this.permissions = res.data.permissions;
                this.isError = false
            })
        }).catch(err => {
            runInAction(() => {
                this.permissions = []
                this.name = ''
                this.isError = true
                this.token = ''
            })
            removeToken()
        })
    }

    async logout() {
        return new Promise((resolve, reject) => {
            post(userLogout).then(res => {
                // console.log(res)
                runInAction(() => {
                    this.permissions = []
                    this.token = ''
                    this.name = ''
                    this.isError = false
                })
                removeToken()
                resolve(res)
            }).catch(err => {
                runInAction(() => {
                    this.permissions = []
                    this.name = ''
                    this.token = '';
                    this.isError = false
                })
                removeToken()
                reject(err)
            })
        })
    }
}

export default new User()
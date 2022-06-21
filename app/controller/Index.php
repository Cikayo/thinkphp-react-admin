<?php
namespace app\controller;

use app\BaseController;

class Index extends BaseController
{
    public function index()
    {
        return view('index/index');
    }

    /**
     * @description 用户登录
     */
    public function login() {
        $userName = input('user_name');
        $data = [
            'user_name'      =>  $userName,
            'password'  =>  md5(input('password')),
        ];
        
        $token = md5($userName);
        session('token', $token);

        return json([
            'code'  =>  200,
            'msg'   =>  '登录成功',
            'data'  =>  [
                'token' =>  $token
            ]
        ]);
    }

    public function loginByToken()
    {
        $permissions = ['/', '/task', '/task/list', '/task/my-list', '/system', '/system/dict/list', '/system/user/list', '/system/menu/list'];
        return json([
            'code'  =>  200,
            'msg'   =>  '成功',
            'data'  =>  [
                'permissions'  =>  $permissions
            ]
        ]);
    }

    public function logout()
    {
        return json([
            'code'  =>  200,
            'msg'   =>  '退出成功'
        ]);
    }
}

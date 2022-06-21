import { lazy } from "react"
const Home = lazy(() => import('./home/index'))
const TaskList = lazy(() => import('./task/TaskList'))
const UserList = lazy(() => import('./system/userList'))
const DictList = lazy(() => import('./system/dictList'))
const MyTaskList = lazy(() => import('./task/MyTaskList'))

export default {
  Home,
  TaskList,
  UserList,
  DictList,
  MyTaskList
}
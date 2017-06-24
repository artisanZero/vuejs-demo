// 导入Vue模块
import Vue from "vue"

// 导入路由模块
import VueRouter from "vue-router"
// 把路由模块安装在Vue框架中，这样模块就是一个全局模块，在任何地方都可以像使用Vue下的方法、属性那样，使用路由模块的相关功能、属性
Vue.use(VueRouter)


// 导入四个路由页面组件
import Home from "../pages/home"
import Market from "../pages/market"
import Car from "../pages/car"
import Mine from "../pages/mine"

// 导入二级路由对应的组件
import One from "../pages/one"
import Two from "../pages/two"

import Detail from "../pages/detail"

import Hello from "../pages/hello"
import World from "../pages/world"

// 定义路由：本质就是一个包含了路径名+对应组件所形成的组件
// let routes = [
let a = [
    // 利用路由传值，在注册路由条目时，使用":"后拼接一个变量名的形式注册路由
    {path: "/detail/:id", component: Detail},
    // {path: "/detail/:img", component: Detail},

    {path: "", component: Home},
    {path: "/home", component: Home},
    {path: "/market", component: Market},
    {path: "/car", component: Car},
    {path: "/mine", component: Mine, children: [
        {path: "", component: One},
        {path: "one", components: {
            a: Hello,
            b: World
        }},
        {path: "two", component: Two}
    ]},
]

// 创建一个路由实例
let router = new VueRouter({
    routes: a
})

export default router;

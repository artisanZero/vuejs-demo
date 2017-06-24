// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 我的

// 移动-开始
// 导入路由模块
import VueRouter from "vue-router"
// 把路由模块安装在Vue框架中，这样模块就是一个全局模块，在任何地方都可以像使用Vue下的方法、属性那样，使用路由模块的相关功能、属性
Vue.use(VueRouter)
// 移动-结束

// 导入resource模块
import VueResource from "vue-resource"

// 把resource模块配置进vue框架中
Vue.use(VueResource)

// 移动-开始
// 导入四个路由页面组件
import Home from "./pages/home"
import Market from "./pages/market"
import Car from "./pages/car"
import Mine from "./pages/mine"

// 导入二级路由对应的组件
import One from "./pages/one"
import Two from "./pages/two"

import Detail from "./pages/detail"

import Hello from "./pages/hello"
import World from "./pages/world"
// 移动-结束

// 使用import把路由实例index.js引入
// import router from "./router/index.js"
// 可以简写成这样
// import router from "./router"

// 导入axios组件
import axios from "axios"

// 把插件设置进Vue的原型中,
Vue.prototype.axios = axios;

// // 导入axios组件，这样不行
// import axios from "axios"
// console.log(axios);

// 移动-开始
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
// 移动-结束

// 我的

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },

  // 我的
  router: router // 把创建出来的路由实例挂载进页面事例中
  // 我的
})

<template>
    <div id="app">
        <nav>
            <!-- 设置路由锚点 -->
            <router-link to="/home">Home</router-link>
            <router-link to="/market">Market</router-link>
            <router-link to="/car">Car</router-link>
            <router-link to="/mine">Mine</router-link>
        </nav>

        <!-- 渲染页面的标签 -->
        <router-view></router-view>

        <!-- <Car /> -->
    </div>
</template>

<script>
    import Car from "./pages/car"
    export default {
        name: "app",
        components: {
            Car
        }
    }
</script>

<style>

</style>

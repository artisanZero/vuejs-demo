<template lang="html">
    <div class="mine">
        <h1>Mine</h1>

        <router-link to="/mine/one">二级路由one</router-link>
        <router-link to="/mine/two">二级路由two</router-link>

        <!-- 渲染二级路由中的组件 -->
        <router-view name="a"></router-view>
        <router-view name="b"></router-view>
    </div>
</template>

<script type="text/javascript">
    export default {

    }
</script>

<style type="text/css" scoped>
    .mine h1 {
        color: orange;
    }

    .mine a:first-of-type {
        color: red;
    }
    .mine a:last-of-type {
        color: blue;
    }
</style>

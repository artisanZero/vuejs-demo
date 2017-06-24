<template lang="html">
    <div class="market">
        <h1>Market</h1>

        <div v-for="item in allData">

            <!-- router-link标签会换为一个a标签 -->
            <!-- 页面传值：要传什么值，就把那个值拼接在路径之后，使用"/"连接 -->
            <router-link :to="'/detail/'+item.id">
                <img :src="item.img" alt="">
                <p v-text="item.name"></p>
            </router-link>

        </div>
    </div>
</template>

<script type="text/javascript">
    // 因为axios是一个普通的插件，不能像resource一样和Vue整合在一起，所以哪个组件需要使用该插件

    // import axios from "axios"

    export default {
        data () {
            return {
                allData: []
            }
        },

        created () {
             this.axios.get("http://h5.yztctech.net/api/axf/apimiaosha.php")
             .then( data => {
                console.log(data);
                console.log(data.data);
                console.log(data.data.product);
                this.allData = data.data.product;
             }, err => {
                console.log(err);
             })
        }
    }
</script>

<style type="text/css" scoped>
    .market h1 {
        color: green;
    }
</style>

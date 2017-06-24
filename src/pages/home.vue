<template lang="html">
    <div class="home">
        <h1>Home</h1>
        <!-- <h3>{{allData}}</h3> -->

        <!-- 解析并展示数据 -->
        <div v-for="item in allData">
            <img :src="item.img" alt="">
            <p v-text="item.name"></p>

        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                allData: []
            }
        },
        created () {
            this.$http.get("http://h5.yztctech.net/api/axf/apihomehot.php")
            .then(data => {
                // console.log(data.body);

                var result = JSON.parse(data.body);
                // console.log(result);
                this.allData = result.data;

            }, error => {
                console.log(error);
            }
        )}
    }
</script>

<style type="text/css" scoped>
    img {
        width: 200px;
    }

    p {
        color: green;
    }
</style>

<style type="text/css">
    p {
        font-size: 30px;
    }
</style>

<style type="text/css">
    /*只对当前文件有效*/
    /*@import "../../static/reset.css";*/
</style>

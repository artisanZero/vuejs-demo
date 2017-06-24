<template lang="html">
    <div class="car">
        <h1>Car</h1>

        <div v-for="item in allData">
            <img :src="item.activity.img" alt="">
            <p v-text="item.activity.name"></p>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                allData:[]
            }
        },
        created () {
            this.$http.get("http://h5.yztctech.net/api/axf/apihome.php")
            .then(data => {
                console.log(data);
                console.log(data.data);
                console.log(data.data.data);
                console.log(data.data.data.slide);
                // var result = JSON.parse(data.data.data);
                // this.allData = result.data;
                this.allData = data.data.data.slide;
            }, err => {
                console.log(err);
            })
        }

    }
</script>

<style type="text/css" scoped>
    h1 {
        color: red;
    }

    img {
        width: 100%;
    }

    p {
        color: blue;
    }
</style>

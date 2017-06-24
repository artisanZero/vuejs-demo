<template lang="html">
    <div>
        <button @click="back()">返回</button>

        <h1>{{ $route.params.id }}</h1>
        <h2>{{ id }}</h2>
        <!-- <img :src="$route.params.img" alt=""> -->
    </div>

</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                id: this.$route.params.id
            }
        },

        methods: {
            back () {
                history.back()
            }
        }

    }
</script>

<style type="text/css">

</style>

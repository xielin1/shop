<template>
    <div>
        <h2>我是详情页</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: '0'
        }
    },
    created() {
        this.id = this.$route.query.id
    }
}
</script>

<style>

</style>
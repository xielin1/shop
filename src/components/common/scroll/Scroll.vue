<template>
    <div ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data() {
        return {
            scroll: null
        }
    },

    mounted() {
        const bscroll = new BScroll(this.$refs.wrapper, {
            pullUpLoad: true,//是否能上拉加载 事件pullingUp
            observeDOM: true,
            scrollbar: true,
            probeType: 3//3是检测所有的滚动 事件scroll，第二个参数是一个回调函数，参数是position
        })
        this.scroll = bscroll;
    }
}
</script>

<style scoped>

</style>
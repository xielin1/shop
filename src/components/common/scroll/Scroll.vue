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
    props: {
        probeType: {
            type: Number,
            default: 3
        }
    },
    data() {
        return {
            scroll: null
        }
    },
    methods: {
        backTop(x, y, time) {
            this.scroll.scrollTo(x, y, time)
        },
        scrollPos() {

        }
    },
    mounted() {
        const bscroll = new BScroll(this.$refs.wrapper, {
            pullUpLoad: true,//是否能上拉加载 事件pullingUp
            observeDOM: true,
            click: true,
            scrollbar: true,
            probeType: this.probeType//3是检测所有的滚动 事件scroll，第二个参数是一个回调函数，参数是position
        })
        this.scroll = bscroll;
        this.scroll.on('scroll', (position) => {
            this.$emit('contentScroll', position)
        })
    }
}
</script>

<style scoped>

</style>
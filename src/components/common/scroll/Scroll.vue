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
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null
        }
    },
    methods: {
        thidsbackTop(x, y, time) {
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        refresh() {
            this.scroll && this.scroll.refresh();
        },
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp();
        }
    },
    mounted() {
        const bscroll = new BScroll(this.$refs.wrapper, {
            pullUpLoad: this.pullUpLoad,//是否能上拉加载 事件pullingUp
            observeDOM: true,
            click: true,
            scrollbar: true,
            probeType: this.probeType//3是检测所有的滚动 事件scroll，第二个参数是一个回调函数，参数是position
        })
        this.scroll = bscroll;
        this.scroll.on('scroll', (position) => {
            this.$emit('contentScroll', position)
        })
        this.scroll.on('pullingUp', () => {
            this.$emit("pullingUp");

        })

    }
}
</script>

<style scoped>

</style>
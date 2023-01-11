<template>
    <swiper>
        <swiper-item v-for="(item, index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imgLoad">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'

export default {
    props: {
        banners: Array,

    },
    data() {
        return {
            isLoad: false
        }
    },
    methods: {
        imgLoad() {//只发出一次事件，记录状态
            if (!this.isLoad) {
                this.isLoad = true
                this.$emit('swiperLoad')
            }
        }
    },
    components: { Swiper, SwiperItem },

}
</script>

<style>

</style>
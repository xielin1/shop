<template>
    <div id="home">
        <nav-bar class="home_nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" class="tab-control" ref="tabControl1"
            v-show="isFixed">
        </tab-control>
        <scroll class="wrapper" ref="scroll" :probeType="3" :pullUpLoad="true" @contentScroll="contentScroll"
            @pullingUp="loadMore">
            <home-swiper :banners="banners" @swiperLoad="swiperLoad"></home-swiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view></feature-view>
            <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2">
            </tab-control>
            <good-list :goods="goods[goodsType].list"></good-list>
        </scroll>
        <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    </div>

</template>
<script>


import NavBar from 'components/common/navbar/NavBar.vue'
import TabBar from '../../components/common/tabbar/TabBar.vue';
import Scroll from '@/components/common/scroll/Scroll.vue';
import BackTop from '@/components/content/backTop/BackTop';

import TabControl from '../../components/content/tabControl/TabControl.vue';
import GoodList from 'components/content/goods/GoodList.vue';

import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView.vue';
import FeatureView from './childComps/FeatureView.vue';


import { getHomeMultidata, getHomeGoods } from '@/network/home';
import { debounce } from 'common/util.js'



export default {
    components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabBar,
        TabControl,
        Scroll,
        GoodList,
        BackTop

    },
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                'pop': { page: 0, list: [] },
                'new': { page: 0, list: [] },
                'sell': { page: 0, list: [] },
            },
            goodsType: 'pop',
            isShowBackTop: false,
            offsetTop: 0,
            isFixed: false,
            leftY: 0
        }
    },
    mounted() {
        this.getHomeMultidata();
        this.getHomeGoods('pop',);
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
        const refresh = debounce(this.$refs.scroll.refresh, 200)
        this.$root.$bus.on('imgLoad', () => {
            refresh();
        })
    },
    onUnmounted() {
        this.$root.$bus.off('imgLoad')
    },
    methods: {
        /**
         *网络请求相关的方法
         */
        getHomeMultidata() {
            getHomeMultidata().then(res => {
                this.banners = res.data.data.banner.list
                this.recommends = res.data.data.recommend.list
            })
        },
        getHomeGoods(type) {
            const page = this.goods[type].page + 1;//动态的获取page
            getHomeGoods(type, page).then((res) => {
                this.goods[type].list.push(...res.data.data.list)//解构语法，把数据拼接到原数组 
                this.goods[type].page++; //成功后页面++
            })
            // 完成上拉加载更多,scroll默认只加载一次
            this.$refs.scroll.finishPullUp()
        },

        /**
         * 事件监听相关方法
         */
        tabClick(index) {//监听tabControl的点击，传数据
            switch (index) {
                case 0: this.goodsType = 'pop'; break;
                case 1: this.goodsType = 'new'; break;
                case 2: this.goodsType = 'sell'; break;
            }
            this.$refs.tabControl1.currentIndex = index;
            this.$refs.tabControl2.currentIndex = index;
        },
        backTop() {
            this.$refs.scroll.backTop(0, 0, 500);
        },
        contentScroll(position) {
            this.isShowBackTop = (-position.y) > 1000
            this.isFixed = (-position.y) > this.offsetTop
        },
        loadMore() {//再次调用请求函数
            this.getHomeGoods(this.goodsType)
        },
        swiperLoad() {
            this.offsetTop = this.$refs.tabControl2.$el.offsetTop
        }
    },

}
</script>

<style scoped>
#home {
    height: 100vh;
    position: relative;
}

.home_nav {
    z-index: 8;
    background-color: #ff699c;
}

.tab-control {
    position: relative;
    z-index: 9;
}

.wrapper {
    overflow: hidden;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;

}
</style>
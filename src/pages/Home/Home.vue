<template>
    <div id="home">
        <nav-bar class="home_nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control :titles="['流行', '新款', '精选']" class="tab_control" @tabClick="tabClick"></tab-control>
        <good-list :goods="goods[goodsType].list"></good-list>
    </div>

</template>
<script>

import NavBar from 'components/common/navbar/NavBar.vue'
import TabBar from '../../components/common/tabbar/TabBar.vue';
import TabControl from '../../components/content/tabControl/TabControl.vue';
import GoodList from 'components/content/goods/GoodList.vue';

import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView.vue';
import FeatureView from './childComps/FeatureView.vue';

import { getHomeMultidata, getHomeGoods } from '@/network/home';



export default {
    components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabBar,
        TabControl,
        GoodList,

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
            goodsType: 'pop'
        }
    },
    created() {
        this.getHomeMultidata();
        this.getHomeGoods('pop',);
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
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
            const page = this.goods[type].page + 1;
            getHomeGoods(type, page).then((res) => {
                this.goods[type].list = res.data.data.list
            })
        },

        /**
         * 事件监听相关方法
         */
        tabClick(index) {
            switch (index) {
                case 0: this.goodsType = 'pop'; break;
                case 1: this.goodsType = 'new'; break;
                case 2: this.goodsType = 'sell'; break;
            }
        }
    }
}
</script>

<style>
#home {
    padding-top: 44px;
}

.home_nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 8;
    background-color: #ff699c;
}

.tab_control {
    position: sticky;
    top: 44px;
    z-index: 9
}
</style>
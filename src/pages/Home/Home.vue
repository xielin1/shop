<template>
    <div id="home">
        <nav-bar class="home_nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control :titles="['流行', '新款', '精选']" class="tab_control"></tab-control>
        <ul>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
        </ul>
    </div>

</template>
<script>

import NavBar from 'components/common/navbar/NavBar.vue'
import TabBar from '../../components/common/tabbar/TabBar.vue';
import TabControl from '../../components/content/tabControl/TabControl.vue';

import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView.vue';
import FeatureView from './childComps/FeatureView.vue';

import { getHomeMultidata } from '@/network/home';

export default {
    components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabBar,
        TabControl
    },
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                'pop': { page: 0, list: [] },
                'news': { page: 0, list: [] },
                'sell': { page: 0, list: [] },
            }
        }
    },
    created() {
        getHomeMultidata().then(res => {
            console.log(res);
            this.banners = res.data.data.banner.list
            this.recommends = res.data.data.recommend.list
        })//异步操作
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
}
</style>
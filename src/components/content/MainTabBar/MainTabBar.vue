<template>
    <tab-bar>
        <tab-bar-item path="/home">
            <img src="~assets/image/tabbar/index.svg" alt="" slot="icon">
            <img src="~assets/image/tabbar/index_active.svg" alt="" slot="icon_active">
            <div slot="title">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category">
            <img src="~assets/image/tabbar/category.svg" alt="" slot="icon">
            <img src="~assets/image/tabbar/category_active.svg" alt="" slot="icon_active">
            <div slot="title">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
            <img src="~assets/image/tabbar/shop.svg" alt="" slot="icon">
            <img src="~assets/image/tabbar/shop_active.svg" alt="" slot="icon_active">
            <div slot="title">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <img src="~assets/image/tabbar/me.svg" alt="" slot="icon">
            <img src="~assets/image/tabbar/me_active.svg" alt="" slot="icon_active">
            <div slot="title">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>
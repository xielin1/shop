<template>
    <div>
        <h2>我是首页</h2>
        <nav-bar class="home_color">
            <div slot="center">购物街</div>
        </nav-bar>
    </div>

</template>
<script>

import NavBar from '../../components/common/navbar/NavBar.vue'
import { getHomeMultidata } from '@/network/home';
export default {
    components: {
        NavBar

    },
    created() {
        getHomeMultidata().then(res => {
            console.log(res);
        })
    }
}
</script>

<style>
.home_color {
    background-color: skyblue;
}
</style>
<template>
    <div class="recommend">
        <a :href="item.link" v-for="item in recommends" :key="item.title" class="rec_item">
            <img :src="item.image" alt="">
            <div>{{ item.title }}</div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        recommends: {
            type: Array,
            default: function () {
                return []
            }
        }
    }
}
</script>

<style>
.recommend {

    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 12px;
    width: 100%;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}


.rec_item img {
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
}
</style>
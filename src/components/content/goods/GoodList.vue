<template>
    <div class="good_list">
        <good-list-item v-for="item in goods" :goodsItem="item" :key="item.title">

        </good-list-item>
    </div>
</template>

<script>
import GoodListItem from 'components/content/goods/GoodListItem.vue';

export default {
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        GoodListItem
    }

}
</script>

<style>
.good_list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>
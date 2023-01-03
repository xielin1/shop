<template>
    <div class="tab_control">
        <div v-for="(item, index) in titles" :key="item" class="tab_control_item"
            :class="{ active: index == currentIndex }" @click="itemClick(index)">
            <span>
                {{ item }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default: function () {
                return [];
            }
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index;
            this.$emit('tabClick', index)
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    }
}
</script>

<style>
.tab_control {
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 16px;
    background-color: #fff;
}

.tab_control_item {
    height: 40px;
    line-height: 40px;
}

.active {
    color: deeppink;

}

.active span {
    border-bottom: 2px solid deeppink;
    padding: 5px;
}
</style>
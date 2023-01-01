<template>
    <div class="tab_bar_item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="icon"></slot>
        </div>
        <div v-else>
            <slot name="icon_active"></slot>
        </div>
        <div :class="{ active: isActive }">
            <slot name="title"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        path: String
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1;
        }
    },
    data() {
        return {

        }
    },
    methods: {
        itemClick() {
            this.$router.push(this.path);
        }
    }
}
</script>

<style>
.tab_bar_item {
    margin-top: 5px;
    vertical-align: bottom;
}

.tab_bar_item img {
    width: 24px;
    height: 24px;
}

.active {
    color: #43b1c6;
}
</style>
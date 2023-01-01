<template>
    <div class="tab_bar">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.tab_bar {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 49px;
    background-color: #f7f7f6;
    display: flex;
    justify-content: space-around;
}
</style>
<template>
    <div class="nav_bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    }
}
</script>

<style>
.nav_bar {
    display: flex;
    height: 44px;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, .1);
}

.left,
.right {
    width: 60px;

}

.center {
    flex: 1;
    font-size: 22px;
    color: #f2f2f2;

}
</style>
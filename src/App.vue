<template>
  <div id="app">
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
import { request } from 'network/request';

export default {
  name: 'App',
  components: {
    MainTabBar

  }
}
</script>

<style>
@import url('./assets/css/base.css');

.main-tab-bar {
  z-index: 9;
}
</style>

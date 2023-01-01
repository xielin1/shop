<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar/MainTabBar'
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
</style>

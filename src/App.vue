<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  name: "App",
  components: {},
  mounted() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    
  },
};
</script>

<style>
@import "./styles/common.css";
@import "./fonts/iconfont.css";
</style>

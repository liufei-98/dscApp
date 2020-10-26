import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/vuex/store.js";
import Loading from "@/utils/loading";
Vue.prototype.$loading = Loading;

import MintUI from "mint-ui"; //引入mint-ui模块
import "mint-ui/lib/style.css"; //引入mint-ui的css
Vue.use(MintUI); //使用mint-ui

//下载安装ly-tab  cnpm install ly-tab -S
import LyTab from "ly-tab"; //引入
Vue.use(LyTab); //使用

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

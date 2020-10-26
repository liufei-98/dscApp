<!-- 公共轮播图 -->
<template>
  <div class="swipe">
    <mt-swipe
      :auto="2000"
      :show-indicators="true"
      :default-index="1"
      :continuous="true"
    >
      <mt-swipe-item
        v-for="data in this.$store.state.HomeSwipe"
        :key="data.swipe_id"
      >
        <img :src="data.swipe_img" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import Axios from "axios";
import { Indicator } from "mint-ui";
export default {
  data() {
    return {};
  },
  methods: {
    getHomeSwipe() {
      Axios.get("http://localhost:3000/api/v1/index/swipe").then((res) => {
        console.log(res.data);
        if (res.status == 200) {
          this.$store.dispatch("actgetHomeSwipe", res.data.data);
          Indicator.close();
        }
      });
    },
  },
  // computed: {
  //   swipeDatas() {
  //     return this.$store.state.swipeDatas;
  //   },
  // },
  mounted() {
    // this.$store.dispatch("actgetSwipeDatas");
    this.getHomeSwipe();
  },
};
</script>
<style lang="less">
.swipe {
  margin-top: 0rem;
  width: 100%;
  height: 12rem;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 12rem;
  }
}
</style>

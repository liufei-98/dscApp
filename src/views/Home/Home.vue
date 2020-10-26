<!--  -->
<template>
  <div class="home" style="background: #f2f2f2">
    <HomeHeader />
    <div class="list-tab">
      <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options"
        @change="changeFn"
      >
      </ly-tab>
      <div class="category-link" @click="toCategory">
        <i class="iconfont iconicon-test"></i>
        <span>分类</span>
      </div>
    </div>
    <div style="height: 8.8rem"></div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
import HomeHeader from "./components/HomeHeader.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    HomeHeader,
  },
  data() {
    //这里存放数据
    return {
      selectedId: 0,
      items: [
        { label: "首页" },
        { label: "家用电器" },
        { label: "男装女装" },
        { label: "靴鞋箱包" },
        { label: "手机数码" },
        { label: "电脑办公" },
        { label: "家居家纺" },
        { label: "个人化妆" },
      ],
      options: {
        activeColor: "#fff",
      },
      childrenRouter: [
        "/home/index",
        "/home/ele",
        "/home/person",
        "/home/box",
        "/home/phone",
        "/home/computer",
        "/home/house",
        "/home/face",
      ],
    };
  },
  methods: {
    changeFn(item, index) {
      this.$router.push(this.childrenRouter[index]);
    },
    toCategory() {
      this.$router.push("/category/858");
    },
  },
  mounted() {
  },
};
</script>
<style lang="less">
.list-tab {
  display: flex;
  position: fixed;
  top: 4.4rem;
  left: 0;
  width: 100%;
  border-top: 1px solid #ccc;
  z-index: 100;
  .ly-tab {
    width: 85%;
    .ly-tabbar {
      width: 100%;
      height: 4.4rem;
      background: red;
      box-shadow: 0px 0px 0px 0px #fff;
      border-bottom: 0px;
      a {
        color: #fff;
      }
    }
  }
  .category-link {
    width: 15%;
    height: 4.4rem;
    background: red;
    color: #fff;
    position: relative;
    .iconfont {
      display: inline-block;
      width: 0.9rem;
      font-size: 1.8rem;
      box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
      padding-left: 5px;
      position: absolute;
      top: 13px;
    }
    span {
      display: inline-block;
      width: 2.8rem;
      font-size: 1.4rem;
      position: absolute;
      top: 13px;
      left: 26px;
    }
  }
}
</style>

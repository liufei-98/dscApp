<!-- 搜索页面头部 -->
<template>
  <div class="search-header">
    <span
      class="iconfont iconjiantou-copy"
      onclick="window.history.back()"
    ></span>
    <input type="text" v-focus="true" v-model="keywords" />
    <div @click="searchKeywords">搜索</div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      keywords: "",
    };
  },
  //自定义指令
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  methods: {
    searchKeywords() {
      if (this.keywords) {
        this.$store.dispatch("searchKeywords", { keywords: this.keywords });
        this.$router.push("/searchlist");
      }
    },
  },
  mounted() {
    console.log(this.keywords);
  },
};
</script>
<style lang="less">
.search-header {
  width: 100%;
  height: 4.4rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  .iconfont {
    display: block;
    width: 10%;
    line-height: 4.4rem;
    text-align: center;
    color: #999;
    font-size: 1.6rem;
  }
  input {
    width: 70%;
    height: 3.3rem;
    padding: 0 1.5rem;
    font-size: 1.6rem;
    border: 1px solid #ccc;
    border-radius: 1.75rem 0 0 1.75rem;
  }
  div {
    width: 15%;
    font-size: 1.6rem;
    background: red;
    line-height: 3.5rem;
    text-align: center;
    color: #fff;
    margin-right: 5%;
    border-radius: 0 1.75rem 1.75rem 0;
  }
}
</style>
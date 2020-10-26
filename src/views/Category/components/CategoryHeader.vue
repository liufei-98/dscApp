<!-- 分类头部组件 -->
<template>
  <div class="category-header">
    <span
      class="iconfont iconjiantou-copy"
      onclick="window.history.back()"
    ></span>
    <form>
      <input type="search" @click="toSearch" />
      <i class="iconfont iconsousuo1"></i>
    </form>
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
    return {};
  },
  methods: {
    toSearch() {
      this.$router.push("/search");
    },
  },
};
</script>
<style lang="less">
.category-header {
  width: 100%;
  height: 4.4rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  .iconfont {
    display: block;
    width: 10%;
    line-height: 4.4rem;
    text-align: center;
    color: #999;
    font-size: 1.6rem;
  }
  form {
    width: 85%;
    line-height: 4.4rem;
    text-align: center;
    position: relative;
    input {
      width: 100%;
      height: 3.5rem;
      padding: 0 1.5rem;
      font-size: 1.6rem;
      border: 1px solid #ccc;
      border-radius: 1.75rem;
    }
    i {
      position: absolute;
      top: -2px;
      right: 10px;
    }
  }
}
</style>

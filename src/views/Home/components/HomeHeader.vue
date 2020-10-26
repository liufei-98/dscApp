<!-- 首页头部搜索栏组件 -->
<template>
  <div class="home-header">
    <header>
      <form>
        <input type="text" placeholder="请输入搜索内容" @focus="tosearch" />
        <i class="iconfont iconsousuo1"></i>
      </form>
      <a href="http://localhost:9527/#/selectlogin">登录</a>
    </header>
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
    tosearch() {
      this.$router.push("/search");
    },
  },
};
</script>
<style lang="less" scoped>
//scoped该样式只作用于当下模块
.home-header {
  width: 100%;
  height: 4.4rem;
  background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  header {
    display: flex;
    form {
      width: 85%;
      position: relative;
      margin-left: 0.5rem;
      input {
        width: 100%;
        height: 3rem;
        border: 1px solid #efefef;
        border-radius: 1.5rem;
        margin-top: 0.7rem;
        box-sizing: border-box;
        font-size: 1.2rem;
        text-indent: 1.5rem; //文本块中首行文本的缩进
      }
      i {
        position: absolute;
        top: 0;
        right: 0;
        width: 4.4rem;
        height: 4.4rem;
        text-align: center;
        line-height: 4.4rem;
        color: #999;
      }
    }
    a {
      display: block;
      width: 15%;
      font-size: 1.4rem;
      color: #fff;
      line-height: 4.4rem;
      text-align: center;
    }
  }
}
</style>

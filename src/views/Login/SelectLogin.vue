<!-- 选择登录组件 -->
<template>
  <div class="select-login">
    <i class="iconfont iconjiantou-copy" @click="toHome"></i>
    <h1>用户登录</h1>
    <img src="@/assets/images/login.jpg" alt="" />
    <h2>请选择登录方式</h2>
    <router-link to="/login" tag="button">手机登录</router-link>
    <h3></h3>
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
    toHome() {
      this.$router.push("/Home");
    },
  },
};
</script>
<style lang="less">
.select-login {
  width: 96%;
  margin: 0 2%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  i {
    position: fixed;
    top: 1.5rem;
    left: 2%;
    font-size: 2rem;
    color: #ccc;
  }
  h1 {
    position: fixed;
    top: 5rem;
    left: 2%;
    font-size: 3rem;
    font-weight: 400;
  }
  img {
    position: fixed;
    top: 15rem;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background: #fff;
  }
  h2 {
    font-size: 1.4rem;
    font-weight: 400;
    color: #666;
    margin-bottom: 1.5rem;
  }
  button {
    width: 20rem;
    height: 4.4rem;
    text-align: center;
    line-height: 4.4rem;
    font-size: 1.4rem;
    background: red;
    color: #fff;
  }
}
</style>

<!-- 登录组件 -->
<template>
  <div class="login">
    <i class="iconfont iconjiantou-copy" @click="toBack"></i>
    <h1>手机登录</h1>
    <img src="@/assets/images/login.jpg" alt="" />
    <div class="login-tab">
      <a href="javascript:;" :class="{ active: loginFlag }" @click="changeTab"
        >短信登录</a
      >
      <a href="javascript:;" :class="{ active: !loginFlag }" @click="changeTab"
        >账号登录</a
      >
    </div>
    <div class="login-content">
      <!-- 短信登录 -->
      <div v-if="loginFlag">
        <section>
          <input
            type="tel"
            maxlength="11"
            placeholder="手机号"
            v-model="phone"
          />
          <button v-if="!num" class="getCode" @click="getCodeFn">
            获取验证码
          </button>
          <button v-else disabled class="getCode">已发送{{ num }}s</button>
        </section>
        <section>
          <input
            type="text"
            maxlength="6"
            placeholder="请输入验证码"
            v-model="code"
          />
        </section>
      </div>
      <!-- 账号登录 -->
      <div v-else>
        <section>
          <input
            type="text"
            placeholder="用户名/手机号/邮箱"
            v-model="username"
          />
        </section>
        <section>
          <input
            type="password"
            v-if="hidePassword"
            placeholder="密码"
            v-model="password"
          />
          <input type="text" v-else placeholder="密码" v-model="password" />
          <button
            v-if="hidePassword"
            class="iconfont iconicon-eye-close"
            @click="showHide"
          ></button>
          <button
            v-else
            class="iconfont iconicon-eye-open"
            @click="showHide"
          ></button>
        </section>
        <section>
          <input type="text" placeholder="验证码" v-model="captcha" />
          <img
            ref="captcha"
            src="http://localhost:3000/api/v1/users/captcha"
            alt=""
            @click="changeCaptcha"
          />
        </section>
      </div>
      <button class="login-btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";
import { loginuser } from "@/api/login.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      loginFlag: true,
      num: 0,
      hidePassword: true,
      phone: "",
      code: "",
      username: "",
      password: "",
      captcha: "",
    };
  },
  computed: {
    identifyPhone() {
      //验证手机号
      return /^[1][3,5,7,8,9][0-9]{9}$/.test(this.phone);
    },
  },
  methods: {
    toBack() {
      //返回前一页
      this.$router.replace("/mine");
    },
    changeTab() {
      //点击切换登录方式
      this.loginFlag = !this.loginFlag;
    },
    getCodeFn() {
      //获取验证码
      if (this.identifyPhone) {
        this.num = 10;
        this.timer = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            clearInterval(this.timer);
          }
        }, 1000);
      } else {
        Toast({
          message: "手机号码格式错误", //弹出的信息文本
          position: "center", //弹出信息的位置
          duration: 1000, //弹出信息存在的时间
        });
      }
    },
    showHide() {
      //点击小眼睛，切换显示与隐藏
      this.hidePassword = !this.hidePassword;
    },
    async login() {
      //登录验证
      if (this.loginFlag) {
        if (!this.phone) {
          Toast("请输入手机号码");
          return;
        } else if (!this.code) {
          Toast("请输入验证码");
          return;
        }
      } else {
        if (!this.username) {
          Toast("请输入用户名");
          return;
        } else if (!this.password) {
          Toast("请输入密码");
          return;
        } else if (!this.captcha) {
          Toast("请输入验证码");
          return;
        }
      }
      //数据请求
      const result = await loginuser(
        this.username,
        this.password,
        this.captcha
      );
      console.log(result);
      if (result.status == 200) {
        this.$store.dispatch("getUserInfo", result.data[0]);
        this.$router.push("/home");
      }
      if (result.err_code == 0) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 1500,
        });
      }
      if (result.status == 500) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 1500,
        });
      }
    },
    changeCaptcha() {
      this.$refs.captcha.src =
        "http://localhost:3000/api/v1/users/captcha?t=" + new Date().getTime();
    },
  },
};
</script>
<style lang="less">
.login {
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
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background: #fff;
    margin-bottom: 1rem;
  }
  .login-tab {
    width: 100%;
    height: 4.4rem;
    display: flex;
    justify-content: space-between;
    a {
      display: block;
      background-color: #ccc;
      width: 45%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
      font-size: 1.4rem;
      border-radius: 5px;
    }
    .active {
      background: skyblue;
      color: #fff;
    }
  }
  .login-content {
    width: 100%;
    section {
      margin-top: 1rem;
      position: relative;
      input {
        width: 100%;
        border: 1px solid #ccc;
        height: 4.4rem;
        border-radius: 5px;
        text-indent: 10px;
        font-size: 1.4rem;
        &:focus {
          border: 1px solid #f00;
        }
      }
      button {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        background: transparent;
        height: 4.4rem;
        line-height: 4.4rem;
        color: #666;
      }
      .iconfont {
        color: #ccc;
      }
      img {
        height: 4.4rem;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 0;
      }
    }
    .login-btn {
      width: 100%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
      font-size: 1.4rem;
      border-radius: 5px;
      background: #f00;
      color: #fff;
      margin-top: 1rem;
    }
  }
}
</style>

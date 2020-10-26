<!--  -->
<template>
  <div class="footer">
    <ul>
      <router-link to="/home" tag="li">
        <div class="nav-img">
          <i
            class="iconfont iconshouye1"
            v-if="this.$route.path.includes('/home')"
          ></i>
          <i class="iconfont iconshouye" v-else></i>
        </div>
        <span>首页</span>
      </router-link>

      <router-link to="/category/858" tag="li">
        <div class="nav-img">
          <i
            :class="[
              'iconfont',
              'iconleimupinleifenleileibie2',
              { 'router-link-active': this.$route.path.includes('/category') },
            ]"
            v-if="this.$route.path.includes('/category')"
          ></i>
          <i class="iconfont iconleimupinleifenleileibie" v-else></i>
        </div>
        <span
          :class="{
            'router-link-active': this.$route.path.includes('/category'),
          }"
          >分类</span
        >
      </router-link>

      <router-link to="/search" tag="li">
        <div class="nav-img">
          <i
            class="iconfont iconsousuo"
            v-if="this.$route.path.includes('/search')"
          ></i>
          <i class="iconfont iconsousuo1" v-else></i>
        </div>
        <span>搜索</span>
      </router-link>

      <router-link to="/cart" tag="li">
        <div class="nav-img">
          <i
            class="iconfont icongouwucheman"
            v-if="this.$route.path.includes('/cart')"
          ></i>
          <i class="iconfont icongouwuchekong" v-else></i>
        </div>
        <span>购物车</span>
      </router-link>
      <router-link to="/mine" tag="li">
        <div class="nav-img">
          <i
            class="iconfont iconwodedangxuan"
            v-if="this.$route.path.includes('/mine')"
          ></i>
          <i class="iconfont iconwode" v-else></i>
        </div>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Indicator } from 'mint-ui';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #ccc;
  ul {
    display: flex;
    height: 4.9rem;
    justify-content: center;
    align-items: center;
    li {
      width: 20%;
      text-align: center;
      .nav-img {
        i {
          font-size: 2.2rem;
        }
      }
    }
  }
}
.router-link-active {
  color: red;
}
</style>

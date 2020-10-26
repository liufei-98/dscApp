<!-- 列表组件 -->
<template>
  <div class="goods-list">
    <CategoryHeader />
    <div class="list-nav">
      <ul>
        <li
          v-for="(data, index) in navlist"
          :key="index"
          :class="flag == index ? 'active' : ''"
        >
          <div @click="changenav(index)">
            <span>{{ data.title }}</span>
            <i
              class="iconfont iconxiajiantou"
              v-if="flag == index ? false : true"
            ></i>
            <i class="iconfont iconshangjiantou" v-else></i>
          </div>
        </li>

        <li>
          <i class="iconfont iconshaixuan"></i>
          筛选
        </li>
      </ul>
    </div>
    <List :lists="goodsList" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Indicator } from "mint-ui";
import CategoryHeader from "@/views/Category/components/CategoryHeader";
import List from "@/components/List.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    CategoryHeader,
    List,
  },
  data() {
    //这里存放数据
    return {
      flag: "",
      navlist: [
        {
          id: 1,
          title: "综合",
        },
        {
          id: 1,
          title: "新品",
        },
        {
          id: 1,
          title: "销量",
        },
        {
          id: 1,
          title: "价格",
        },
      ],
      lists: [],
    };
  },
  //监听属性 类似于data概念
  computed: {
    goodsList() {
      return this.$store.state.goodsList;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changenav(index) {
      this.flag = index;
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.dispatch("getGoodsList", {
      cat_id: this.$route.query.cat_id,
    });
    console.log(this.$route.query.cat_id);
    this.timer = setTimeout(function () {
      Indicator.close();
    }, 100);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.list-nav {
  width: 100%;
  height: 3.6rem;
  ul {
    display: flex;
    li {
      width: 20%;
      height: 3.6rem;
      line-height: 3.6rem;
      text-align: center;
      font-size: 1.3rem;
      i {
        font-size: 1.2rem;
      }
    }
    .active {
      color: red;
    }
  }
}
</style>
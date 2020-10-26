<!-- 分类左边列表组件 -->
<template>
  <div class="category-left">
    <ul>
      <li v-for="v in this.$store.state.CategoryLeftDatas" :key="v.cat_id">
        <!-- cat_id是官网的id名    category_id是老师的数据库的id 都是858-->
        <router-link :to="'/category/' + v.cat_id">
          <!-- cat_name是官网的name名    menu_name是老师的数据库的name名  都是家用电器-->
          <p>{{ v.cat_name }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
import { Indicator } from "mint-ui";
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
  methods: {
    getCategoryLeftDatas() {
      // 左边导航列数据地址
      //   https://x.dscmall.cn/api/catalog/list  大商创官网数据库
      //   http://114.215.173.225:3000/api/v1/category   老师的数据库
      // Axios.get("/api/v1/category").then((res) => {
      //   console.log(res.data.data);
      //   if (res.data.status == 200) {
      //     // this.CategroyLeftDatas = res.data.data;
      //     this.$store.dispatch("actgetCategoryLeftDatas", res.data.data);
      //   }
      // });
      Axios.get("/dscmall/catalog/list").then((res) => {
        console.log(res.data.status);
        if (res.data.status == "success") {
          this.$store.dispatch("actgetCategoryLeftDatas", res.data.data);
          Indicator.close();
        }
      });
    },
  },
  mounted() {
    this.getCategoryLeftDatas();
  },
};
window.onload = function () {
  console.log(window.location.href);
  if (window.location.href.includes("http://localhost:9527/#/category/"))
    window.location.href = "http://localhost:9527/#/category/858";
};
</script>
<style lang="less">
.category-left {
  width: 25%;
  height: 100%;
  border-right: 0.05rem solid #f5f5f5;
  overflow-y: scroll;
  ul {
    li {
      width: 100%;
      height: 4rem;
      text-align: center;

      p {
        display: block;
        width: 100%;
        height: 2.5rem;
        margin: 0.75rem 0;
        font-size: 1.3rem;
        color: #999;
        line-height: 2.5rem;
      }
      .router-link-active {
        p {
          color: red;
          border-left: 2px solid red;
        }
      }
    }
  }
}
.category-left::-webkit-scrollbar {
  display: none;
}
</style>

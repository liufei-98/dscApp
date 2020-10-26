<!-- 分类页面右边内容 -->
<template>
  <div class="category-right">
    <div class="category-con">
      <div>
        <img :src="ad" alt="" />
      </div>

      <div
        class="child-list"
        v-for="value in this.$store.state.CategoryRightDatas"
        :key="value.cat_id"
      >
        <!-- 两数据库id一样不用改 -->
        <div class="child-title">
          <h3><i>-</i> {{ value.cat_name }}<i>-</i></h3>
          <!-- name一样不用改 -->
        </div>
        <ul class="child-list-wrap">
          <router-link
            tag="li"
            v-for="v in value.child"
            :key="v.cat_id"
            :to="'/goodslist?cat_id=' + v.cat_id"
          >
            <!-- child也是一样不用改 -->
            <img :src="v.touch_icon" alt="" />
            <h4>{{ v.cat_name }}</h4>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
// import { Indicator } from 'mint-ui';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      ad: "",
    };
  },
  methods: {
    // 注意在路由中将分类页面路由设置为动态路由,后面跟/:cid
    getCategoryRightDatas(cid) {
      // 右边内容区域数据地址
      //  http://114.215.173.225:3000/api/v1/category/categorylist/858  老师数据库接口地址
      //  https://x.dscmall.cn/api/catalog/list/858  大商创官网接口地址
      // Axios.get(`/api/v1/category/categorylist/${cid}`).then((res) => {
      //   console.log(res.data.data);
      //   if (res.status == 200) {
      //     this.$store.dispatch("actgetCategoryRightDatas", res.data.data);
      //   }
      // });
      Axios.get(`/dscmall/catalog/list/${cid}`).then((res) => {
        // console.log(res.status);
        if (res.status == 200) {
          this.$store.dispatch("actgetCategoryRightDatas", res.data.data);
          // Indicator.close();
        }
        var arr = this.$store.state.CategoryLeftDatas.filter((item) => {
          return item.cat_id == cid;
        });
        // console.log(arr);
        this.ad = arr[0].touch_catads;
      });
    },
  },
  watch: {
    $route(to) {
      let cid = to.params.cid;
      this.getCategoryRightDatas(cid);
    },
  },
  mounted() {
    this.getCategoryRightDatas("858");
  },
};
</script>
<style lang="less">
.category-con {
  width: 71%;
  margin: 1.35rem 2% 0;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  overflow-y: scroll;
  img {
    width: 100%;
  }
  .child-list {
    width: 100%;
    .child-title {
      width: 100%;
      height: 2.5rem;
      margin: 1.1rem 0;
      line-height: 2.5rem;
      h3 {
        font-weight: normal;
        font-size: 1.3rem;
        color: #333;
        text-align: center;
        i {
          color: #e0e0e0;
        }
      }
    }
    .child-list-wrap {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      li {
        width: 33%;
        height: 8.2rem;
        margin-bottom: 1rem;
        img {
          width: 5.2rem;
          height: 5.2rem;
        }
        h4 {
          font-size: 1.2rem;
          color: #777;
          font-weight: normal;
          height: 3rem;
          line-height: 3rem;
        }
      }
    }
  }
}
.category-con::-webkit-scrollbar {
  display: none;
}
</style>

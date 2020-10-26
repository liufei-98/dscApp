<!-- 商品列表一行两列 -->
<template>
  <div class="list">
    <ul>
      <li v-for="data in lists" :key="data.goods_id">
        <router-link :to="'/goodsdetail/?goods_id=' + data.goods_id">
          <img :src="'http://localhost:3000/' + data.goods_img" alt />
          <h3>{{ data.goods_name }}</h3>
          <p>{{ data.shop_price }}</p>
          <div>
            <span>进店</span>
            <em>1w人已购买</em>
            <i class="iconfont icongouwuchekong"></i>
          </div>
        </router-link>
      </li>
    </ul>
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
  props: {
    lists: Array,
  },
  mounted() {
    console.log(this.lists);
  },
};
</script>
<style lang="less">
.list {
  width: 100%;
  background: rgb(242, 242, 242);
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 48%;
      height: 28rem;
      background-color: #fff;
      margin: 0.5rem 1%;
      border-radius: 5px;
      overflow: hidden;
      img {
        width: 100%;
      }
      h3 {
        font-size: 1.4rem;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        width: 90%;
        margin-left: 5%;
      }
      p {
        font-size: 1.6rem;
        color: red;
        width: 90%;
        margin-left: 5%;
        font-weight: 600;
        &::before {
          content: "￥";
          font-size: 1rem;
        }
        &::after {
          content: ".00";
          font-size: 1rem;
          font-weight: 600;
        }
      }
      div {
        width: 90%;
        margin-left: 5%;
        line-height: 4.5rem;
        span {
          background: #fef0f0;
          color: red;
          font-size: 1.3rem;
          padding: 1px 5px;
          border-radius: 3px;
        }
        em {
          font-style: normal;
          font-size: 1.2rem;
          color: #999;
          padding: 1px 5px;
        }
        i {
          color: red;
          float: right;
          font-size: 1.4rem;
          font-weight: 100;
        }
      }
    }
  }
}
</style>
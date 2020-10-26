<!-- 商品详情页 -->
<template>
  <div class="goods-detail">
    <Head title="商品详情" />
    <!-- 轮播图 -->
    <div class="detail-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img :src="'http://localhost:3000/' + goodsdetail.goods_img" alt />
          </div>
          <div class="swiper-slide">
            <img :src="'http://localhost:3000/' + goodsdetail.goods_img" alt />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="detail-content">
      <div class="goods-price">
        <p>{{ goodsdetail.shop_price }}</p>
      </div>
      <div class="goods-title">
        {{ goodsdetail.goods_name }}
      </div>
      <div class="goods-desc">
        <div class="goods-desc-title">商品详情</div>
        <div class="goods-desc-content" v-html="goodsdetail.goods_desc"></div>
      </div>
    </div>
    <!-- 详情页底部 -->
    <div class="detail-footer">
      <div class="service">
        <i class="iconfont iconkefu"></i>
        <span>客服</span>
      </div>
      <div class="collect">
        <i class="iconfont iconshoucang1"></i>
        <span>收藏</span>
      </div>
      <router-link tag="div" class="cart" to="/cart">
        <i class="iconfont icongouwuchezhengpin"></i>
        <em>{{ count }}</em>
        <span>购物车</span>
        <div :class="{ addnum: flag }" v-show="flag">+1</div>
      </router-link>
      <div class="addCart" @click="addCartFn(goodsdetail)">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Indicator } from "mint-ui";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import Head from "@/components/Head.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Head,
  },
  data() {
    //这里存放数据
    return {
      flag: false,
    };
  },
  //监听属性 类似于data概念
  computed: {
    goodsdetail() {
      return this.$store.state.goodsDetails;
    },
    //购物车中商品数量
    count() {
      let count = 0;
      this.$store.state.carts.map((item) => {
        count += item.value;
      });
      return count;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //添加购物车发送商品信息
    addCartFn(data) {
      console.log(data); //点击获得对应的商品信息
      // 获取当前商品的id
      console.log(this.$store.state.carts);
      var isCart = this.$store.state.carts.find((item) => {
        // 当前商品id在内存中存在即已经购买过该商品时，信息不用重复发送
        if (item.goods_id == data.goods_id) {
          item.value++;
        }
        return item.goods_id == data.goods_id;
      });
      // 当上面结果为false时，证明第一次添加该商品，发送商品信息
      if (!isCart) {
        var cartData = {
          //设置购物车需要的商品信息
          goods_id: data.goods_id,
          goods_name: data.goods_name,
          shop_price: data.shop_price,
          goods_img: data.goods_img,
          value: 1,
          isSelect: true,
        };
      }
      this.$store.commit("setCartDatas", cartData); //将信息传递到状态管理当中
      this.flag = true;
      this.timer = setInterval(() => {
        this.flag = false;
      }, 2000);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timer = setTimeout(function () {
      Indicator.close();
    }, 10);
    this.$store.dispatch("getGoodsDetails", {
      goods_id: this.$route.query.goods_id,
    });
    new Swiper(".swiper-container", {
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
    console.log(this.goodsdetail);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.detail-swiper {
  margin-top: 4.4rem;
  width: 100%;
  height: 36rem;
  img {
    width: 100%;
    height: 36rem;
  }
}
.detail-content {
  width: 100%;
  background-color: #f4f4f4;
  .goods-price {
    width: 96%;
    padding: 0 2%;
    background-color: #fff;
    p {
      height: 4.6rem;
      line-height: 4.6rem;
      font-size: 2.4rem;
      font-weight: 900;
      color: red;
      &::before {
        content: "￥";
        font-size: 1.6rem;
      }
      &::after {
        content: ".00";
        font-size: 1.6rem;
      }
    }
  }
  .goods-title {
    background-color: #fff;
    width: 96%;
    padding: 0 2%;
    padding-bottom: 10px;
    font-size: 1.6rem;
    font-family: initial;
  }
  .goods-desc {
    width: 100%;
    background-color: #fff;
    margin-top: 10px;
    .goods-desc-title {
      width: 100%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
      font-size: 1.6rem;
    }
    .goods-desc-content {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
.detail-footer {
  width: 100%;
  height: 5rem;
  border-top: 1px solid #efefef;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #666;
    i {
      font-size: 2rem;
    }
  }
  .addCart {
    flex: 2;
    background-color: #f55;
    color: #fff;
    font-size: 1.6rem;
  }
  .buy {
    flex: 2;
    background-color: #ff976a;
    color: #fff;
    font-size: 1.6rem;
  }
  .collect {
    border-left: 1px solid #f4f4f4;
    border-right: 1px solid #f4f4f4;
  }
  .cart {
    position: relative;
    em {
      font-style: normal;
      position: absolute;
      top: 3px;
      right: 8px;
      background-color: red;
      color: #fff;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      text-align: center;
      line-height: 1.6rem;
      font-size: 0.8rem;
    }
    .addnum {
      color: red;
      font-size: 1.8rem;
      font-weight: 600;
      position: absolute;
      animation: moveup 2s linear;
    }
    @keyframes moveup {
      0% {
        top: -1.5rem;
        opacity: 0.5;
      }
      50% {
        top: -3rem;
        opacity: 1;
      }
      100% {
        top: -3.5rem;
        opacity: 0;
      }
    }
  }
}
</style>
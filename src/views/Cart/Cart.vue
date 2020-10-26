<!--  -->
<template>
  <div class="cart">
    <Head title="购物车"></Head>
    <!-- 购物车内容 -->
    <div class="cart-goods">
      <!-- 购物车有商品 -->
      <div class="cart-content" v-if="!nocart">
        <ul>
          <li v-for="(goods, index) in carts" :key="goods.goods_id">
            <!-- 选择框 -->
            <div class="select" @click="changeSelect(goods, index)">
              <i
                class="iconfont iconxuanzekuangmoren"
                v-if="!goods.isSelect"
              ></i>
              <i
                class="iconfont iconxuanzekuangxuanzhong"
                v-else
                style="color: red"
              ></i>
            </div>
            <!-- 商品图片 -->
            <div class="cart-img">
              <router-link :to="'/goodsdetail/?goods_id=' + goods.goods_id">
                <img :src="'http://localhost:3000/' + goods.goods_img" alt="" />
              </router-link>
            </div>
            <!-- 商品信息 -->
            <div class="cart-info">
              <!-- 商品名称 -->
              <div class="cart-title">
                {{ goods.goods_name }}
              </div>
              <div class="cart-wrap">
                <!-- 商品价格 -->
                <div class="cart-price">{{ goods.shop_price }}</div>
                <!-- 商品数量 -->
                <div class="cart-num">
                  <em @click="minusNum(index)">-</em>
                  <input
                    type="number"
                    v-model="goods.value"
                    @input="changeNum(index)"
                    ref="val"
                  />
                  <em @click="addNum(index)">+</em>
                </div>
                <div class="iconfont iconlajitong" @click="dele(index)"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 购物车无商品 -->
      <div class="cart-nogoods" v-else>
        <i class="iconfont icongouwuchekong"></i>
        <p>
          购物车空空的！去
          <router-link tag="span" to="/category/858"> 挑选商品 </router-link>!
        </p>
      </div>
    </div>
    <!-- 总计结算，当购物车为空时隐藏 -->
    <div class="cart-footer" v-if="!nocart">
      <!-- 全选框 -->
      <div class="checkAll" @click="selectAllFn">
        <i class="iconfont iconxuanzekuangmoren" v-if="!selectAll"></i>
        <i
          class="iconfont iconxuanzekuangxuanzhong"
          v-else
          style="color: red"
        ></i>
        <span>全选</span>
      </div>
      <!-- 合计 -->
      <div class="price">
        合计：
        <span>{{ total }}</span>
      </div>
      <!-- 结算 -->
      <div class="gobuy">去结算({{ count }})</div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
import { Indicator } from "mint-ui";
import Head from "@/components/Head.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    Head,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    //引入商品数据
    carts() {
      return this.$store.state.carts;
    },
    //全选
    selectAll() {
      return this.$store.state.checkAll;
    },
    // 合计
    total() {
      let totalPrice = 0;
      this.$store.state.carts.map((item) => {
        if (item.isSelect) {
          totalPrice += item.value * item.shop_price;
        }
      });
      return totalPrice;
    },
    // 结算个数
    count() {
      let count = 0;
      this.$store.state.carts.map((item) => {
        if (item.isSelect) {
          count += item.value;
        }
      });
      return count;
    },
    nocart() {
      return this.$store.state.carts.length == 0;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 数字++
    addNum(index) {
      this.$store.commit("addNum", index);
    },
    //数字--
    minusNum(index) {
      this.$store.commit("minusNum", index);
    },
    //输入数字
    changeNum(index) {
      let val = this.$refs.val[index].value;
      this.$store.commit("changeNum", { index, val });
    },
    // 删除
    dele(index) {
      this.$store.commit("dele", index);
    },
    // 改变选种状态
    changeSelect(goods, index) {
      console.log(goods);
      goods.isSelect = !goods.isSelect;
      this.$store.commit("changeSelect", { goods, index });
    },
    //全选状态
    selectAllFn() {
      this.$store.commit("selectAllFn");
    },
  },
  mounted() {
    this.timer = setTimeout(function () {
      Indicator.close();
    }, 100);
  },
};
</script>
<style lang="less">
.cart-goods {
  width: 100%;
  margin-top: 5rem;
  .cart-nogoods {
    width: 100%;
    text-align: center;
    i {
      font-size: 20rem;
      color: #f4f4f4;
    }
    p {
      font-size: 1.6rem;
      color: #666;
    }
    span {
      color: tomato;
    }
  }
  .cart-content {
    width: 100%;
    margin-bottom: 5rem;
    li {
      display: flex;
      height: 10rem;
      border-bottom: 1px solid #f4f4f4;
      .select {
        display: flex;
        flex-direction: column;
        width: 10%;
        justify-content: center;
        text-align: center;
      }
      .cart-img {
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        img {
          width: 100%;
        }
      }
      .cart-info {
        width: 65%;
        margin: 0 2% 0 3%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .cart-title {
          font-size: 1.2rem;
          height: 4rem;
          line-height: 2rem;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          margin-bottom: 1rem;
        }
        .cart-wrap {
          width: 100%;
          display: flex;
          justify-content: space-between;
          .cart-price {
            color: red;
            font-size: 1.4rem;
            font-weight: 900;
            &::before {
              content: "￥";
              font-size: 0.8rem;
            }
            &::after {
              content: ".00";
              font-size: 0.8rem;
            }
          }
          .cart-num {
            display: flex;
            em {
              font-style: normal;
              width: 2rem;
              height: 2rem;
              border: 1px solid #f4f4f4;
              line-height: 2rem;
              text-align: center;
              font-size: 1.4rem;
            }
            input {
              width: 4rem;
              height: 2rem;
              border: 1px solid #f4f4f4;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
.cart-footer {
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  display: flex;
  position: fixed;
  bottom: 5rem;
  left: 0;
  border-top: 1px solid #f4f4f4;
  .checkAll {
    width: 25%;
    text-align: center;
    span {
      font-size: 1.6rem;
      margin-left: 1rem;
    }
  }
  .price {
    width: 45%;
    text-align: right;
    font-size: 1.6rem;
    span {
      margin-right: 1rem;
      color: red;
      font-weight: 900;
      &::before {
        content: "￥";
        font-size: 1.2rem;
      }
      &::after {
        content: ".00";
        font-size: 1.2rem;
      }
    }
  }
  .gobuy {
    width: 30%;
    background: red;
    color: #fff;
    text-align: center;
    font-size: 1.6rem;
  }
}
</style>

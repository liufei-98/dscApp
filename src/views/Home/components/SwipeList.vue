<!-- 公共轮播图 -->
<template>
  <div class="swipelist">
    <mt-swipe
      :auto="0"
      :show-indicators="true"
      :default-index="0"
      :continuous="true"
    >
      <mt-swipe-item>
        <ul>
          <li class="imglist" v-for="(list, index) in swipelistA" :key="index">
            <img :src="list.url" />
            <span>{{ list.title }}</span>
          </li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item>
        <ul>
          <li class="imglist" v-for="(list, index) in swipelistB" :key="index">
            <img :src="list.url" />
            <span>{{ list.title }}</span>
          </li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item>
        <ul>
          <li class="imglist" v-for="(list, index) in swipelistC" :key="index">
            <img :src="list.url" />
            <span>{{ list.title }}</span>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipelistA: [
        {
          url: require("@/assets/images/101.png"),
          title: "潮流服饰",
        },
        {
          url: require("@/assets/images/102.png"),
          title: "箱包配饰",
        },
        {
          url: require("@/assets/images/103.png"),
          title: "美容护肤",
        },
        {
          url: require("@/assets/images/104.png"),
          title: "母婴儿童",
        },
        {
          url: require("@/assets/images/105.png"),
          title: "手机数码",
        },
        {
          url: require("@/assets/images/106.png"),
          title: "微社区",
        },
        {
          url: require("@/assets/images/107.gif"),
          title: "拼团",
        },
        {
          url: require("@/assets/images/108.gif"),
          title: "预售",
        },
        {
          url: require("@/assets/images/109.png"),
          title: "拍卖",
        },
        {
          url: require("@/assets/images/110.gif"),
          title: "超值礼包",
        },
      ],
      swipelistB: [
        {
          url: require("@/assets/images/201.png"),
          title: "家居装修",
        },
        {
          url: require("@/assets/images/202.png"),
          title: "休闲零食",
        },
        {
          url: require("@/assets/images/203.png"),
          title: "水果生鲜",
        },
        {
          url: require("@/assets/images/204.png"),
          title: "萌宠",
        },
        {
          url: require("@/assets/images/205.png"),
          title: "大家电",
        },
        {
          url: require("@/assets/images/206.png"),
          title: "店铺街",
        },
        {
          url: require("@/assets/images/207.png"),
          title: "品牌特卖",
        },
        {
          url: require("@/assets/images/208.png"),
          title: "天天特价",
        },
        {
          url: require("@/assets/images/209.png"),
          title: "限时团购",
        },
        {
          url: require("@/assets/images/210.png"),
          title: "积分商城",
        },
      ],
      swipelistC: [
        {
          url: require("@/assets/images/301.png"),
          title: "限时秒杀",
        },
        {
          url: require("@/assets/images/302.png"),
          title: "到家O2O",
        },
        {
          url: require("@/assets/images/303.png"),
          title: "拍卖",
        },
        {
          url: require("@/assets/images/304.png"),
          title: "促销活动",
        },
        {
          url: require("@/assets/images/305.png"),
          title: "酒水饮料",
        },
        {
          url: require("@/assets/images/306.png"),
          title: "母婴专区",
        },
        {
          url: require("@/assets/images/307.png"),
          title: "图书文娱",
        },
        {
          url: require("@/assets/images/308.png"),
          title: "中西乐器",
        },
        {
          url: require("@/assets/images/309.png"),
          title: "花卉绿植",
        },
        {
          url: require("@/assets/images/310.png"),
          title: "香水香氛",
        },
      ],
    };
  },
};
</script>
<style lang="less">
.swipelist {
  width: 100%;
  height: 20rem;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 10px 10px 0 0;
  ul {
    height: 18rem;
    display: flex;
    flex-wrap: wrap;
    li {
      height: 9rem;
      width: 20%;
      text-align: center;
      img {
        width: 7rem;
        height: 7rem;
      }
      span {
        font-size: 1.3rem;
      }
    }
  }
  .mint-swipe-indicators {
    bottom: 0px;
    .mint-swipe-indicator {
      width: 15px;
      height: 4px;
      opacity: 0.5;
      border-radius: 0;
      margin: 0px;
      background: rgba(255, 0, 0, 0.3);
    }
    .mint-swipe-indicator:first-child {
      border-radius: 2px 0px 0px 2px;
    }
    .mint-swipe-indicator:last-child {
      border-radius: 0px 2px 2px 0px;
    }
    .mint-swipe-indicator.is-active {
      border-radius: 2px 2px 2px 2px;
      background: rgba(255, 0, 0, 1);
    }
  }
}
</style>

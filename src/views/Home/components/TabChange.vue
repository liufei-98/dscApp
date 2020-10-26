<!-- 秒杀tab切换 -->
<template>
  <div class="tab-change">
    <div class="tab-header">
      <img src="@/assets/images/timekill.png" alt="" />
      <div class="time">
        <div>距结束还剩</div>
        <p>
          <span>{{ hr }}</span>
          <i>:</i>
          <span>{{ min }}</span>
          <i>:</i>
          <span>{{ sec }}</span>
        </p>
      </div>
    </div>
    <div class="tab-con">
      <ul>
        <li
          v-for="(data, index) in lists"
          :key="index"
          :class="flag == index ? 'active' : ''"
        >
          <div @click="changeTab(index)">
            <div class="time">
              {{ data.time }}
            </div>
            <p class="context">
              {{ data.content }}
            </p>
          </div>

          <div class="swipe-list-wrap">
            <div class="swipe-wrap2">
              <div
                class="swipe-item"
                v-for="value in data.listData"
                :key="value.id"
              >
                <div class="imgbox">
                  <img class="img1" :src="value.imgsrc" alt="" />
                  <img class="img2" :src="src" alt="" />
                </div>
                <p class="title">{{ value.title }}</p>
                <span class="price">
                  {{ value.price }}
                </span>
                <del>
                  {{ value.oldPrice }}
                </del>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
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
    return {
      hr: 0,
      min: 0,
      sec: 0,
      flag: "",
      src: require("@/assets/images/time.png"),
      lists: [
        {
          id: 1,
          time: "24:00",
          content: "抢购中",
          listData: [
            {
              id: 101,
              imgsrc: require("@/assets/images/A101.jpg"),
              title:
                "Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安全锁",
              price: "￥200.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 102,
              imgsrc: require("@/assets/images/A102.jpg"),
              title:
                "Midea/美的 MB80-eco31WD 8公斤变频洗衣机全自动波轮智能大容量 省电静音 0.9洗净比 洗得更干净",
              price: "￥2500.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 103,
              imgsrc: require("@/assets/images/A103.jpg"),
              title:
                "Skyworth/创维 55V9E 55吋4K超高清智能网络平板LED液晶电视机 50 25核智能 4K超高清 人气爆款",
              price: "￥2200.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 104,
              imgsrc: require("@/assets/images/A104.jpg"),
              title:
                "Midea/美的 F6021-X1(S)热水器储水式 家用洗澡电热水器抑菌节能 直降150 购买送净水器+花洒套装",
              price: "￥3500.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 105,
              imgsrc: require("@/assets/images/A105.jpg"),
              title:
                "志高嵌入式电陶炉家用双头双灶镶嵌式电磁炉双眼光波炉特价正品 不挑锅可烧烤 三环猛火 嵌入式双灶",
              price: "￥1500.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 106,
              imgsrc: require("@/assets/images/A106.jpg"),
              title:
                "名龙堂i7 6700升7700 GTX1060 6G台式电脑主机DIY游戏组装整机 升6GB独显 送正版WIN10 一年上门",
              price: "￥12000.00",
              oldPrice: "￥29999.00",
            },
            {
              id: 107,
              imgsrc: require("@/assets/images/A107.jpg"),
              title:
                "京天华盛i5 7500/GTX1050Ti独显台式机组装机DIY整机游戏电脑主机 热销25万台 跑分17万 升7代CPU",
              price: "￥10000.00",
              oldPrice: "￥19999.00",
            },
            {
              id: 108,
              imgsrc: require("@/assets/images/A108.jpg"),
              title: "Apple/苹果 27” Retina 5K显示屏 iMac:3.3GHz处理器2TB存储",
              price: "￥8900.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 109,
              imgsrc: require("@/assets/images/A109.jpg"),
              title:
                "三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22",
              price: "￥3500.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 110,
              imgsrc: require("@/assets/images/A110.jpg"),
              title:
                "新品HYC 2k显示器32寸电脑显示器无边框HDMI液晶显示器IPS显示屏 2K高清屏IPS 超薄 厚6mm 无边框",
              price: "￥2000.00",
              oldPrice: "￥9999.00",
            },
          ],
        },
        {
          id: 2,
          time: "8:00",
          content: "即将开始",
          listData: [
            {
              id: 201,
              imgsrc: require("@/assets/images/B201.jpg"),
              title: "实木衣柜",
              price: "￥590.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 202,
              imgsrc: require("@/assets/images/B202.jpg"),
              title:
                "丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
              price: "￥700.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 203,
              imgsrc: require("@/assets/images/B203.jpg"),
              title:
                "Razer雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘",
              price: "￥490.00",
              oldPrice: "￥1000.00",
            },
            {
              id: 204,
              imgsrc: require("@/assets/images/B202.jpg"),
              title:
                "丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
              price: "￥590.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 205,
              imgsrc: require("@/assets/images/B202.jpg"),
              title:
                "丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
              price: "￥590.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 206,
              imgsrc: require("@/assets/images/B202.jpg"),
              title:
                "丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
              price: "￥590.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 207,
              imgsrc: require("@/assets/images/B202.jpg"),
              title:
                "丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
              price: "￥590.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 208,
              imgsrc: require("@/assets/images/B202.jpg"),
              title:
                "丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
              price: "￥590.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 209,
              imgsrc: require("@/assets/images/B202.jpg"),
              title:
                "丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
              price: "￥590.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 210,
              imgsrc: require("@/assets/images/B202.jpg"),
              title:
                "丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
              price: "￥590.00",
              oldPrice: "￥9999.00",
            },
          ],
        },
        {
          id: 3,
          time: "10:00",
          content: "即将开始",
          listData: [
            {
              id: 301,
              imgsrc: require("@/assets/images/A101.jpg"),
              title:
                "Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安全锁",
              price: "￥200.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 302,
              imgsrc: require("@/assets/images/A102.jpg"),
              title:
                "Midea/美的 MB80-eco31WD 8公斤变频洗衣机全自动波轮智能大容量 省电静音 0.9洗净比 洗得更干净",
              price: "￥2500.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 303,
              imgsrc: require("@/assets/images/A103.jpg"),
              title:
                "Skyworth/创维 55V9E 55吋4K超高清智能网络平板LED液晶电视机 50 25核智能 4K超高清 人气爆款",
              price: "￥2200.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 304,
              imgsrc: require("@/assets/images/A104.jpg"),
              title:
                "Midea/美的 F6021-X1(S)热水器储水式 家用洗澡电热水器抑菌节能 直降150 购买送净水器+花洒套装",
              price: "￥3500.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 305,
              imgsrc: require("@/assets/images/A105.jpg"),
              title:
                "志高嵌入式电陶炉家用双头双灶镶嵌式电磁炉双眼光波炉特价正品 不挑锅可烧烤 三环猛火 嵌入式双灶",
              price: "￥1500.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 306,
              imgsrc: require("@/assets/images/A106.jpg"),
              title:
                "名龙堂i7 6700升7700 GTX1060 6G台式电脑主机DIY游戏组装整机 升6GB独显 送正版WIN10 一年上门",
              price: "￥12000.00",
              oldPrice: "￥29999.00",
            },
            {
              id: 307,
              imgsrc: require("@/assets/images/A107.jpg"),
              title:
                "京天华盛i5 7500/GTX1050Ti独显台式机组装机DIY整机游戏电脑主机 热销25万台 跑分17万 升7代CPU",
              price: "￥10000.00",
              oldPrice: "￥19999.00",
            },
            {
              id: 308,
              imgsrc: require("@/assets/images/A108.jpg"),
              title: "Apple/苹果 27” Retina 5K显示屏 iMac:3.3GHz处理器2TB存储",
              price: "￥8900.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 309,
              imgsrc: require("@/assets/images/A109.jpg"),
              title:
                "三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22",
              price: "￥3500.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 310,
              imgsrc: require("@/assets/images/A110.jpg"),
              title:
                "新品HYC 2k显示器32寸电脑显示器无边框HDMI液晶显示器IPS显示屏 2K高清屏IPS 超薄 厚6mm 无边框",
              price: "￥2000.00",
              oldPrice: "￥9999.00",
            },
          ],
        },
        {
          id: 4,
          time: "16:00",
          content: "即将开始",
          listData: [
            {
              id: 401,
              imgsrc: require("@/assets/images/A101.jpg"),
              title:
                "Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安全锁",
              price: "￥200.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 402,
              imgsrc: require("@/assets/images/A102.jpg"),
              title:
                "Midea/美的 MB80-eco31WD 8公斤变频洗衣机全自动波轮智能大容量 省电静音 0.9洗净比 洗得更干净",
              price: "￥2500.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 403,
              imgsrc: require("@/assets/images/A103.jpg"),
              title:
                "Skyworth/创维 55V9E 55吋4K超高清智能网络平板LED液晶电视机 50 25核智能 4K超高清 人气爆款",
              price: "￥2200.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 404,
              imgsrc: require("@/assets/images/A104.jpg"),
              title:
                "Midea/美的 F6021-X1(S)热水器储水式 家用洗澡电热水器抑菌节能 直降150 购买送净水器+花洒套装",
              price: "￥3500.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 405,
              imgsrc: require("@/assets/images/A105.jpg"),
              title:
                "志高嵌入式电陶炉家用双头双灶镶嵌式电磁炉双眼光波炉特价正品 不挑锅可烧烤 三环猛火 嵌入式双灶",
              price: "￥1500.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 406,
              imgsrc: require("@/assets/images/A106.jpg"),
              title:
                "名龙堂i7 6700升7700 GTX1060 6G台式电脑主机DIY游戏组装整机 升6GB独显 送正版WIN10 一年上门",
              price: "￥12000.00",
              oldPrice: "￥29999.00",
            },
            {
              id: 407,
              imgsrc: require("@/assets/images/A107.jpg"),
              title:
                "京天华盛i5 7500/GTX1050Ti独显台式机组装机DIY整机游戏电脑主机 热销25万台 跑分17万 升7代CPU",
              price: "￥10000.00",
              oldPrice: "￥19999.00",
            },
            {
              id: 408,
              imgsrc: require("@/assets/images/A108.jpg"),
              title: "Apple/苹果 27” Retina 5K显示屏 iMac:3.3GHz处理器2TB存储",
              price: "￥8900.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 409,
              imgsrc: require("@/assets/images/A110.jpg"),
              title:
                "新品HYC 2k显示器32寸电脑显示器无边框HDMI液晶显示器IPS显示屏 2K高清屏IPS 超薄 厚6mm 无边框",
              price: "￥2000.00",
              oldPrice: "￥9999.00",
            },
            {
              id: 410,
              imgsrc: require("@/assets/images/A109.jpg"),
              title:
                "三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22",
              price: "￥3500.00",
              oldPrice: "￥9999.00",
            },
          ],
        },
      ],
    };
  },
  methods: {
    countdown() {
      const end = Date.parse(new Date("2020-12-01"));
      const now = Date.parse(new Date());
      const msec = end - now;
      let hr = parseInt((msec / 1000 / 60 / 60) % 24);
      let min = parseInt((msec / 1000 / 60) % 60);
      let sec = parseInt((msec / 1000) % 60);
      this.hr = hr > 9 ? hr : "0" + hr;
      this.min = min > 9 ? min : "0" + min;
      this.sec = sec > 9 ? sec : "0" + sec;
      const that = this;
      setTimeout(function () {
        that.countdown();
      }, 1000);
    },
    changeTab(index) {
      this.flag = index;
    },
  },
  mounted() {
    this.countdown();
  },
};
</script>
<style lang="less">
.tab-change {
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 10px;
  position: relative;
  .tab-header {
    width: 100%;
    display: flex;
    img {
      height: 2rem;
      margin: 10px;
    }
    .time {
      display: flex;
      div {
        font-size: 1.4rem;
        line-height: 4rem;
        margin-left: 60px;
      }
      p {
        margin: 6px;
        span {
          display: inline-block;
          width: 1.5rem;
          height: 1.5rem;
          background: red;
          border-radius: 3px;
          color: #fff;
          text-align: center;
        }
        i {
          font-style: normal;
          color: red;
          font-size: 1.6rem;
          font-weight: 900;
          padding: 0 5px;
        }
      }
    }
  }
  .tab-con {
    width: 100%;
    height: 25rem;
    border-top: 1px solid #ccc;
    ul {
      li {
        float: left;
        width: 25%;
        height: 5rem;
        border-bottom: 1px solid #ccc;
        .time {
          width: 100%;
          height: 3rem;
          line-height: 3rem;
          text-align: center;
          font-size: 1.6rem;
          font-weight: 900;
        }
        .context {
          display: block;
          width: 100%;
          height: 2rem;
          line-height: 2rem;
          text-align: center;
          font-size: 1rem;
        }
        .swipe-list-wrap {
          width: 100%;
          height: 20rem;
          position: absolute;
          top: 100px;
          left: 0;
          display: none;
          overflow-x: scroll;
          .swipe-wrap2 {
            width: 110rem;
            height: 18rem;
            .swipe-item {
              margin-top: 1px;
              width: 11rem;
              height: 18rem;
              float: left;
              display: flex;
              flex-direction: column;
              text-align: center;
              .imgbox {
                position: relative;
                margin-top: 1rem;
                .img1 {
                  width: 11rem;
                }
                .img2 {
                  width: 4rem;
                  position: absolute;
                  top: 0;
                  left: 0;
                }
              }
              .title {
                width: 9rem;
                margin: 0 1rem;
                font-size: 1.2rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              }
              .price {
                display: block;
                color: red;
                font-size: 1rem;
                font-weight: 900;
              }
              del {
                font-size: 0.8rem;
                color: rgb(136, 136, 136);
              }
            }
          }
        }
      }
      .active {
        border-bottom: 1px solid red;
        .time {
          color: red;
          font-size: 1.8rem;
        }
        .context {
          color: red;
          font-size: 1.2rem;
        }
        .swipe-list-wrap {
          display: block;
        }
      }
      .swipe-list-wrap::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>

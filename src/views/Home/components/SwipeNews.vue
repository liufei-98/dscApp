<!-- 滚动新闻组件 -->
<template>
  <div class="swipe-news">
    <img src="@/assets/images/news.png" />
    <ul :class="{ 'news-list': true, trans: flag == true }" ref="news">
      <!-- 只要想要在Vue中直接操作DOM元素，就必须用ref属性进行注册 -->
      <li v-for="value in newsData" :key="value.id">
        {{ value.data }}
        <span>></span>
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
    return {
      flag: false,
      timer: "",
      newsData: [
        {
          id: "1",
          data: "国际腕表品牌签约",
        },
        {
          id: "2",
          data: "将成为我国最大的电商服务平台",
        },
        {
          id: "3",
          data: "欢迎国际品牌入驻平台",
        },
        {
          id: "4",
          data: "双11，大折扣，限时秒杀",
        },
      ],
    };
  },
  methods: {
    scrollnews() {
      var oUl = this.$refs.news;
      oUl.style.marginTop = "-5rem";
      var that = this;
      that.flag = !that.flag;
      setTimeout(function() {
        that.newsData.push(that.newsData[0]);
        that.newsData.shift();
        oUl.style.marginTop = "0";
        that.flag = !that.flag;
      }, 500);
    },
  },
  mounted() {
    this.timer = setInterval(this.scrollnews, 5000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="less">
.swipe-news {
  background: #fff;
  border-top: 1px solid #f4f4f4;
  width: 100%;
  display: flex;
  height: 5rem;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  img {
    height: 3rem;
    margin-top: 1rem;
    margin-left: 1rem;
  }
  .trans {
    transition: all 0.5s;
  }
  li {
    width: 25rem;
    height: 5rem;
    line-height: 5rem;
    font-size: 1.4rem;
    margin-left: 2rem;
    span {
      float: right;
      color: red;
    }
  }
}
</style>

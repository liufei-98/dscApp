<!--  -->
<template>
  <div class="category-content">
    <CategoryLeft />
    <CategoryRight />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CategoryLeft from "./CategoryLeft";
import CategoryRight from "./CategoryRight";
export default {
  //import引入的组件需要注入到对象中才能使用

  components: {
    CategoryLeft,
    CategoryRight,
  },
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
};
</script>
<style lang="less">
.category-content {
  width: 100%;
  height: calc(100% - 9.3rem); //给定位才有高度
  position: absolute;
  top: 4.4rem;
  left: 0;
  overflow: hidden;
}
</style>

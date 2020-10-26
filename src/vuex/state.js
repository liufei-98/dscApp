//state用来存储数据
const state = {
  CategoryLeftDatas: [],
  CategoryRightDatas: [],
  HomeSwipe:[],//首页轮播图
  SwipeDatas: [],//导入轮播图数据最简方式
  goodsList:[], //商品列表数据
  userInfo:[],  //用户信息
  goodsDetails:[], //产品详情数据
  //购物车数据
  carts:localStorage["carts"]?JSON.parse(localStorage["carts"]):[],
  //全选按钮
  checkAll:localStorage["checkAll"]?JSON.parse(localStorage["checkAll"]):true,
  searchList:[]
};
// 暴露state
export default state;

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 创建组件-->新建.vue文件-->导入文件（通常组件名称为大写字母开头
import Home from "../views/Home/Home.vue";  // 主页
import Cart from "../views/Cart/Cart.vue";  //购物车页
import Category from "../views/Category/Category.vue";  //分类页
import Search from "../views/Search/Search.vue";  //搜索页
import Mine from "../views/Mine/Mine.vue";  //个人中心页
import Login from "../views/Login/Login.vue";  //登录页
import SelectLogin from "../views/Login/SelectLogin.vue";  //选择登录页
import GoodsList from "../views/GoodsList/GoodsList.vue";  //商品列表页 
import GoodsDetail from "../views/GoodsDetail/GoodsDetail.vue";  //商品详情页
import SearchList from "../views/Search/SearchList.vue" 

//配置首页的子组件
import Index from "../views/Home/children/Index.vue";
import Ele from "../views/Home/children/Ele.vue";
import Person from "../views/Home/children/Person.vue";
import Box from "../views/Home/children/Box.vue";
import Phone from "../views/Home/children/Phone.vue";
import Computer from "../views/Home/children/Computer.vue";
import House from "../views/Home/children/House.vue";
import Face from "../views/Home/children/Face.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "index",
        component: Index,
      },
      {
        path: "ele",
        component: Ele,
      },
      {
        path: "person",
        component: Person,
      },
      {
        path: "box",
        component: Box,
      },
      {
        path: "phone",
        component: Phone,
      },
      {
        path: "computer",
        component: Computer,
      },
      {
        path: "house",
        component: House,
      },
      {
        path: "face",
        component: Face,
      },
      {
        path: "/home",
        redirect: "/home/index",
      },
    ],
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/category/:cid",
    name: "Category",
    component: Category,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/mine",
    name: "Mine",
    component: Mine,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/selectlogin",
    name: "SelectLogin",
    component: SelectLogin,
  },
  {
    path: "/goodslist",
    name: "GoodsList",
    component: GoodsList,
  },
  {
    path: "/goodsdetail",
    name: "GoodsDetail",
    component: GoodsDetail,
  },
  {
    path:"/searchlist",
    name:"SearchList",
    component:SearchList,
  },
  {
    path: "/",
    redirect: "/home",
  },
];

const router = new VueRouter({
  routes,
});

export default router;

//actions 定义方法来提交mutations中定义的方法

import { getHomeSwipe } from "@/api/index.js";
import { getGoodsList,getGoodsDetail } from "@/api/list.js"
import {searchFn} from "@/api/search.js"
const actions = {
  actgetCategoryLeftDatas(context, data) {
    context.commit("getCategoryLeftDatas", data);
  },
  actgetCategoryRightDatas(context, data) {
    context.commit("getCategoryRightDatas", data);
  },
  actgetHomeSwipe(context,data){
    context.commit("getHomeSwipe",data);
  },
  async actgetSwipeDatas(context) {
    const result = await getHomeSwipe();
    context.commit("getSwipeDatas", result.data);
  },
  async getGoodsList(context,data){
    const result=await getGoodsList(data);
    context.commit("getGoodsList",result.data);
  },
  async getGoodsDetails(context,params){
    const result=await getGoodsDetail(params);
    context.commit("getGoodsDetails",result.data[0])
  },
  async searchKeywords(context, params) {
    const result = await searchFn(params)
    context.commit("searchKeywords", result.data)
}
};

// 暴露
export default actions;

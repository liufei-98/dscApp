import ajax from "./ajax"

//定义一个全局变量--全局路径
const Base_URL="/api" 

//产品列表页
export const getGoodsList=(params)=>ajax(Base_URL+"/v1/category/goodslist",params)

//产品详情页
export const getGoodsDetail=(params)=>ajax(Base_URL+"/v1/category/goodsdetail",params)
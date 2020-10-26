//mutations定义方法修改state
import { MessageBox } from 'mint-ui';
const mutations = {
  getCategoryLeftDatas(state, data) {
    state.CategoryLeftDatas = data;
  },
  getCategoryRightDatas(state, data) {
    state.CategoryRightDatas = data;
  },
  getHomeSwipe(state, data) {
    state.HomeSwipe = data;
  },
  getSwipeDatas(state, data) {
    state.SwipeDatas = data;
  },
  // 商品列表数据
  getGoodsList(state,data){
    state.goodsList=data;
  },
  // 商品详情数据
  getGoodsDetails(state,data){
    state.goodsDetails=data;
  },
  // 商品在购物车中的数据,保存在内存中
  setCartDatas(state,data){
    console.log(data);
    if(data){
      state.carts.push(data)
    }
    localStorage.setItem("carts",JSON.stringify(state.carts))
  },
  //数字++
  addNum(state,index){
    state.carts[index].value++
    localStorage.setItem("carts",JSON.stringify(state.carts))  //修改之后重新设置本地存储数据
  },
  // 数字--
  minusNum(state,index){
    if(state.carts[index].value==1){
      state.carts[index].value==1
      MessageBox({
        title:'温馨提示',
        message:'购买的商品数量至少要一个！'
      })
    }else{
      state.carts[index].value--
      localStorage.setItem("carts",JSON.stringify(state.carts))  //修改之后重新设置本地存储数据
    }
  },
  // 输入数字
  changeNum(state,data){
    if(data.val<=1){
      data.val=1
      MessageBox({
        title:'警告',
        message:'说过不能小于1，并且要书写规范，否则让你手机分分钟原地爆炸'
      })
    }
    state.carts[data.index].value = data.val
    localStorage.setItem("carts", JSON.stringify(state.carts))
  },
    // 删除商品
    dele(state,index){
      MessageBox.confirm('确定要扔了它吗？不要啊？').then(()=>{
        state.carts.splice(index,1)
        localStorage.setItem("carts",JSON.stringify(state.carts))
      },()=>{
        localStorage.setItem("carts",JSON.stringify(state.carts))
      })
    },
    // 商品的选种状态
    changeSelect(state,isSelect){
      console.log(state);
      console.log(isSelect);
      state.carts[isSelect.index]=isSelect.goods
      let isCheck=state.carts.every((item)=>{
        return item.isSelect==true
      })
      state.checkAll=isCheck
      localStorage.setItem("checkAll",state.checkAll)
      localStorage.setItem("carts",JSON.stringify(state.carts))
    },
    selectAllFn(state){
      state.checkAll=!state.checkAll
      state.carts.forEach(item=>{
        item.isSelect=state.checkAll
      })
      localStorage.setItem("carts",JSON.stringify(state.carts))
      localStorage.setItem("checkAll",state.checkAll)
    },
    searchKeywords(state,data){
      state.searchList=data
    }
};

// 暴露
export default mutations;

export default {
  addCart(context, payload) {

    // 方法一
    // let oldProduct = null;
    // for (let item of state.cartList) {
    //   console.log(item);
    //   if (item.iid === payload.iid) {
    //     console.log(item.iid);
    //     oldProduct = item
    //   }
    // }

    //方法二
    return new Promise((resolve, reject) => {
      let oldProduct = null;
      oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        context.commit('addConter', oldProduct)
        resolve('商品+1')
      } else {
        payload.count = 1;
        payload.checklist = true
        context.commit('addToCart', payload)
        resolve('添加商品成功')
      }
    })
  },
  addCount(context, iid) {
    let oldProduct = context.state.cartList.find(item => item.iid === iid)
    context.commit('addConter', oldProduct)
  },
  decrCount(context, iid) {
    let oldProduct = context.state.cartList.find(item => item.iid === iid)
    if (oldProduct.count >= 2) {
      context.commit('decrConter', oldProduct)
    }
  }
}

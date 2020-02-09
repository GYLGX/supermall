export default {
  addConter(state, payload) {
    payload.count++
  },
  decrConter(state, payload) {
    payload.count--
  },
  addToCart(state, payload) {
    state.cartList.push(payload)
  }
}

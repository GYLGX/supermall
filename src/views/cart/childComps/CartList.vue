<template>
  <div class=''>
    <cart-list-item v-for='item in $store.state.cartList' :key='item.iid' :payload='item'></cart-list-item>
  </div>
</template>
<script>
  import CartListItem from './CartListItem';
  export default {
    name: 'CartList',
    components: {
      CartListItem
    }
  }

</script>
<style scoped>

</style>

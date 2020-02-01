<template>
  <div class='GoodsList'>
    <goods-list-item v-for='item in goods' :goods-item='item'></goods-list-item>
  </div>
</template>
<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem'
  export default {
    name: 'GoodsList',
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default: []
      }
    }
  }

</script>
<style scoped>
  .GoodsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3px;
  }

</style>

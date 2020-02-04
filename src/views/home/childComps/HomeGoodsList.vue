<template>
  <goods-list>
    <goods-list-item></goods-list-item>
  </goods-list>
</template>
<script>
  import GoodsList from 'components/content/goods/GoodsList'
  import GoodsListItem from 'components/content/goods/GoodsListItem'
  export default {
    name: 'HomeGoodsList.',
    components: {
      GoodsList,
      GoodsListItem
    }
  }

</script>
<style scoped>

</style>

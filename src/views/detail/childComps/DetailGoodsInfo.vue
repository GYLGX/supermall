<template>
  <div class='detail-goods-info' v-if='Object.keys(goodsInfo).length !== 0'>
    <div>{{goodsInfo.desc}}</div>
    <div>{{getkey}}</div>
    <div v-for='(item,index) in getlist'>
      <img :src="item" alt="" class="dateil-item-img" @load='imageLoad'>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailGoodsInfo',
    components: {},
    data() {
      return {
        imagesLength: 0
      }
    },
    props: {
      goodsInfo: {
        type: Object,
        default: {}
      }
    },
    methods: {
      imageLoad() {
        this.$emit('imageload');
      }
    },
    watch: {
      goodsInfo() {
        this.imagesLength = this.goodsInfo.detailImage[0].list.length
      }
    },
    computed: {
      getkey() {
        return this.goodsInfo.detailImage[0].key
      },
      getlist() {
        return this.goodsInfo.detailImage[0].list
      }
    }
  }

</script>
<style scoped>
  .detail-goods-info {
    padding-bottom: 20px;
    border-bottom: 4px solid rgba(100, 100, 100, .07);
  }

  .dateil-item-img {
    width: 100%;
  }

</style>

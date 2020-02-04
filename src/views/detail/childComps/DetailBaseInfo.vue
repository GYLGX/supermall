<template>
  <div v-if="Object.keys(goods).length !== 0">
    <div class="title">{{goods.title}}</div>
    <div class="price-info">
      <span class="newPrice" :style="{color:goods.priceColor}">{{goods.newPrice}}</span>
      <span class="oldPrice" v-show='goods.oldPrice'>{{goods.oldPrice}}</span>
      <span class="discount" v-show='goods.discount'
        :style="{backgroundColor:goods.priceColor}">{{goods.discount}}</span>
    </div>
    <div class="info-othe">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for='index in goods.services.length-1' :key='index'>
        <img :src="goods.services[index -1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailBaseInfo',
    components: {},
    props: {
      goods: {
        type: Object,
        default () {
          return {}
        }
      }
    },
  }

</script>
<style scoped>
  .title {
    font-weight: 700;
    padding: 10px;
  }

  .price-info {
    padding-left: 10px;
  }

  .newPrice {
    font-size: 21px;
  }

  .oldPrice {
    text-decoration: line-through;
    margin: 10px;
  }

  .discount {
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 20px;
    font-size: 12px;
    color: #fff;
    position: relative;
    top: -10px;
  }

  .info-othe {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #aaa;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .info-service {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 4px solid rgba(100, 100, 100, .07);
  }

  .info-service-item {
    width: 33%;
    font-size: 12px;
    text-align: center;
    margin-bottom: 5px;
  }

  .info-service-item img {
    width: 12px;
    height: 12px;
    margin-right: 3px;
    margin-bottom: -2px;
  }

</style>

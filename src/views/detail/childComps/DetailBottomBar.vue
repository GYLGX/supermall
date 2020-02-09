<template>
  <div class='detail-bottom-bar'>
    <div class="bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div @click='addToCart'>加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailBottomBar',
    components: {},
    methods: {
      addToCart() {
        this.$emit('addToCart')
      }
    },
  }

</script>
<style scoped>
  .detail-bottom-bar {
    background-color: #fff;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    text-align: center;
    box-shadow: 0 -1px 1px 1px rgb(100, 100, 100, .1);
  }

  .bar-left,
  .bar-right {
    display: flex;
  }

  .bar-left {
    width: 55%;
  }

  .bar-left div {
    flex: 1;
    font-size: 13px;
  }

  .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 0 auto;
    margin-top: 5px;
    background: url("~assets/img/detail/detail_bottom.png");
    background-size: 100%;
  }


  .service {
    background-position: 0 -54px;
  }

  .shop {
    background-position: 0 -98px;
  }


  .bar-right {
    width: 45%;
    line-height: 49px;
  }

  .bar-right div:first-child {
    width: 60%;
    background-color: #ffe817;
  }

  .bar-right div:last-child {
    width: 40%;
    background-color: #f69;
    color: #fff;
  }

</style>

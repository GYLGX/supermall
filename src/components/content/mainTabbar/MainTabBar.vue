<template>
  <tab-bar>
    <tab-bar-itme link='/home' activeColor='red'>
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-itme>
    <tab-bar-itme link='/category' activeColor='red'>
      <img slot="item-icon" src="~assets/img/tabbar/classify.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/classify-active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-itme>
    <tab-bar-itme link='/cart' activeColor='red'>
      <img slot="item-icon" src="~assets/img/tabbar/shop.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shop-active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-itme>
    <tab-bar-itme link='/prfile'>
      <img slot="item-icon" src="~assets/img/tabbar/mine.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/mine-active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-itme>
  </tab-bar>
</template>
<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItme from 'components/common/tabbar/TabBarItme'
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItme
    }
  }

</script>
<style>

</style>

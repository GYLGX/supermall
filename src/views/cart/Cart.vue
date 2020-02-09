<template>
  <div>
    <nav-bar class="home-nav">
      <div slot='center'>购物车({{getNumber}})</div>
    </nav-bar>
    <scroll class="cart-scroll" ref='scroll'>
      <cart-list></cart-list>
    </scroll>
    <bottom-bar class="bottom-bar"></bottom-bar>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar';
  import Scroll from 'components/common/scroll/Scroll';

  import CartList from './childComps/CartList'
  import BottomBar from './childComps/BottomBar';

  export default {
    name: 'Cart',
    components: {
      NavBar,
      Scroll,
      CartList,
      BottomBar
    },
    computed: {
      getNumber() {
        return this.$store.state.cartList.length
      }
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }

</script>
<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .cart-scroll {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 93px;
    overflow: hidden;
    background-color: #ffffff;
  }

  .bottom-bar {
    position: fixed;
    height: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    background-color: #eee;
  }

</style>

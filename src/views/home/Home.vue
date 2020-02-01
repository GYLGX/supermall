<template>
  <div class="Home">
    <!-- NarBar栏 -->
    <nav-bar class="home-nav">
      <div slot='center'>特惠街</div>
    </nav-bar>

    //滚动插件
    <scroll class="content" ref='scroll' :probe-type=3 @scroll='onscrollTop'>
      <!-- 轮播图 -->
      <home-swiper :banners='banners'></home-swiper>
      <!-- 图片分类栏 -->
      <recommend-view :recommends='recommends'></recommend-view>
      <!-- 图片链接 -->
      <feature-view></feature-view>
      <!-- 文字分类栏 -->
      <tab-control class="tab-control" :titles="['流行','型款','精选']" @tabclick='tabclick'></tab-control>
      <!-- 分类下的商品 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native='backClick' v-show='scrollTop' />

  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  //网络请求方法
  import {
    getHomeMultidata,
    getHomeGoodsdata
  } from 'network/home'

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currenType: 'new',
        scrollTop: false
      }
    },
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodsList,

      HomeSwiper,
      RecommendView,
      FeatureView,
      BackTop
    },
    computed: {
      showGoods() {
        return this.goods[this.currenType].list
      }
    },
    //vue创建出来来时时调用的生命周期函数
    created() {
      //调用获取轮播图和分类图的方法
      this.getHomeMultidata()

      //调用获取分类里面的数据的方法
      this.getHomeGoodsdata('pop')
      this.getHomeGoodsdata('new')
      this.getHomeGoodsdata('sell')

    },
    //当template挂载到dom上会回调的
    mounted() {
      //监听item 中图片加载是否完成
      const refresh = this.debounce(this.$refs.scroll.refresh, 20)
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })
    },
    methods: {
      /*
       *事件监听
       */
      //分类tab的切换
      tabclick(index) {
        switch (index) {
          case 0:
            this.currenType = 'pop'
            break
          case 1:
            this.currenType = 'new'
            break
          case 2:
            this.currenType = 'sell'
            break
        }
        // if (index === 0) {
        //   this.currenType = 'pop'
        // } else if (index === 1) {
        //   this.currenType = 'new'
        // } else if (index === 2) {
        //   this.currenType = 'sell'
        // }
      },

      //回到顶部
      backClick() {
        this.$refs.scroll.backtop(0, 0)
      },

      //到指定位置显示置顶图标
      onscrollTop(position) {
        this.scrollTop = -position.y > 1000
      },

      //防抖函数
      debounce(func, delay) {
        let timer = null
        return (...args) => {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this, args)
            console.log(timer);
          }, delay)
        }
      },

      /*
       *啊网络请求
       */
      //获取轮播图和分类图的方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      //获取分类里面的数据的方法
      getHomeGoodsdata(type) {
        const page = this.goods[type].page + 1
        getHomeGoodsdata(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
        })
      }
    },
  }

</script>
<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    z-index: 10;
    right: 0;
    left: 0;
    top: 0;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    /* background-color: white; */
  }

  .content {
    position: fixed;
    top: 44px;
    left: 0px;
    right: 0px;
    bottom: 49px;
    overflow: hidden;
  }

</style>

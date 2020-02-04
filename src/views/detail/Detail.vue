<template>
  <div class='Detail' v-show='DetailSwiperImage'>
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="detail-scroll" :pull-up-load='true' ref="scroll">
      <!-- 轮播图 -->
      <detail-swiper :detail-swiper-image='DetailSwiperImage'></detail-swiper>
      <!-- 商品信息 -->
      <detail-base-info :goods='goods'></detail-base-info>
      <!-- 店铺信息 -->
      <detail-shop-info :shops='shops'></detail-shop-info>
      <!-- 图片展示 -->
      <detail-goods-info :goods-info='goodsInfo' @imageload='imageload'></detail-goods-info>
      <!-- 尺码参数 -->
      <detail-param-info :param-info='paramInfo'></detail-param-info>
      <!-- 评论区 -->
      <detail-comment-info :comment-info='commentInfo'></detail-comment-info>
      <!-- 推荐 -->
      <ul>
        <ul>dd1</ul>
        <ul>dd2</ul>
        <ul>dd3</ul>
        <ul>dd4</ul>
        <ul>dd5</ul>
        <ul>dd6</ul>
        <ul>dd7</ul>
        <ul>dd8</ul>
        <ul>dd9</ul>
        <ul>dd10</ul>
      </ul>
    </scroll>
  </div>
</template>
<script>
  import Scroll from 'components/common/scroll/Scroll';

  import DetailNavBar from './childComps/DetailNavBar';
  import DetailSwiper from './childComps/DetailSwiper';
  import DetailBaseInfo from './childComps/DetailBaseInfo';
  import DetailShopInfo from './childComps/DetailShopInfo';
  import DetailGoodsInfo from './childComps/DetailGoodsInfo';
  import DetailParamInfo from './childComps/DetailParamInfo';
  import DetailCommentInfo from './childComps/DetailCommentInfo'

  import {
    getdetaildata,
    getRecommend,
    Goods,
    Shop,
    GoodsParam
  } from 'network/detail'

  export default {
    name: 'Detail',
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo
    },
    data() {
      return {
        iid: 0,
        DetailSwiperImage: [],
        goods: {},
        shops: {},
        goodsInfo: {},
        paramInfo: {},
        commentInfo: {}
      }
    },
    created() {
      this.iid = this.$router.currentRoute.query.iid;
      this.getdetaildata(this.iid);
      this.getRecommend();
    },
    methods: {
      //事件
      imageload() {
        this.$refs.scroll.refresh()
      },
      //获取到所有的数据
      getdetaildata(iid) {
        getdetaildata(iid).then(res => {
          let data = res.result;
          this.DetailSwiperImage = data.itemInfo.topImages;
          //商品信息
          this.goods = new Goods(data.columns, data.itemInfo, data.shopInfo.services)
          //店铺信息
          this.shops = new Shop(data.shopInfo)
          //商品的详细信息
          this.goodsInfo = data.detailInfo
          //保存参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
          //评论
          if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }

        })
      },
      //获取推荐数据
      getRecommend() {
        getRecommend().then(res => {
          // console.log(res);
        })
      }
    },
  }

</script>
<style scoped>
  .detail-nav {
    position: relative;
    z-index: 10;
    background-color: #fff;
  }

  .detail-scroll {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    background-color: #fff;
  }

</style>

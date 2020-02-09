<template>
  <div class='Detail' v-show='DetailSwiperImage'>
    <detail-nav-bar class="detail-nav" @titleClick='titleClick' ref='detailNavBar'></detail-nav-bar>
    <scroll class="detail-scroll" :probe-type=3 @scroll='onscrollTop' :pull-up-load='true' ref="scroll">
      <!-- 轮播图 -->
      <detail-swiper :detail-swiper-image='DetailSwiperImage'></detail-swiper>
      <!-- 商品信息 -->
      <detail-base-info :goods='goods'></detail-base-info>
      <!-- 店铺信息 -->
      <detail-shop-info :shops='shops'></detail-shop-info>
      <!-- 图片展示 -->
      <detail-goods-info :goods-info='goodsInfo' @imageload='imageload'></detail-goods-info>
      <!-- 尺码参数 -->
      <detail-param-info ref='params' :param-info='paramInfo'></detail-param-info>
      <!-- 评论区 -->
      <detail-comment-info ref='comment' :comment-info='commentInfo'></detail-comment-info>
      <!-- 推荐 -->
      <goods-list ref='recomment' :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native='backClick' v-show='scrollTop' />
    <detail-bottom-bar @addToCart='addToCart'></detail-bottom-bar>
  </div>
</template>
<script>
  import {
    debounce
  } from 'common/utils'
  import {
    scrollTopMixin,
    itemListenerMixin
  } from 'common/mixin';

  import Scroll from 'components/common/scroll/Scroll';
  import GoodsList from 'components/content/goods/GoodsList'

  import DetailNavBar from './childComps/DetailNavBar';
  import DetailSwiper from './childComps/DetailSwiper';
  import DetailBaseInfo from './childComps/DetailBaseInfo';
  import DetailShopInfo from './childComps/DetailShopInfo';
  import DetailGoodsInfo from './childComps/DetailGoodsInfo';
  import DetailParamInfo from './childComps/DetailParamInfo';
  import DetailCommentInfo from './childComps/DetailCommentInfo';
  import DetailBottomBar from './childComps/DetailBottomBar'

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
      GoodsList,

      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar
    },
    data() {
      return {
        iid: 0,
        DetailSwiperImage: [],
        goods: {},
        shops: {},
        goodsInfo: {},
        paramInfo: {},
        commentInfo: {},
        showGoods: [],
        DetailScrollY: [],
        debounceFunction: null,
        navIndex: 0
      }
    },
    mixins: [scrollTopMixin],
    created() {
      this.iid = this.$router.currentRoute.query.iid;
      this.getdetaildata(this.iid);
      this.getRecommend();
      this.debounceFunction = debounce(() => {
        //刷新
        this.$refs.scroll.refresh()
        //获取navbaritem每个的对应位置
        this.DetailScrollY = []
        this.DetailScrollY.push(0)
        this.DetailScrollY.push(this.$refs.params.$el.offsetTop)
        this.DetailScrollY.push(this.$refs.comment.$el.offsetTop)
        this.DetailScrollY.push(this.$refs.recomment.$el.offsetTop)
        this.DetailScrollY.push(Number.MAX_VALUE)
      })
    },
    mixins: [scrollTopMixin],
    methods: {
      //事件
      imageload() {
        this.debounceFunction()
      },
      //scroll滚动时的事件监听
      onscrollTop(position) {
        //到指定位置显示置顶图标
        this.showTop(position);
        //绑定对应标题
        this.toCorrespondence(position)
      },
      //绑定对应标题
      toCorrespondence(position) {
        const positionY = -position.y
        const length = this.DetailScrollY.length;
        // console.log(positionY);
        for (let i = 0; i < length - 1; i++) {
          //1 、直接做判断
          // if ((this.navIndex !== i) && (i < length - 1 && this.DetailScrollY[i] <= positionY && positionY < this
          //     .DetailScrollY[i + 1]) || (this.navIndex !== i) && (i === length - 1 && this.DetailScrollY[i] <=
          //     positionY)) {
          //   console.log(i);
          //   this.navIndex = i;
          //   this.$refs.detailNavBar.detailType = i
          // }

          //2 、在this.DetailScrollY 后添加多一个数字
          if ((this.navIndex !== i) && (i < length - 1 && this.DetailScrollY[i] <= positionY && positionY < this
              .DetailScrollY[i + 1])) {
            this.navIndex = i;
            this.$refs.detailNavBar.detailType = i
          }
        }
      },
      //点解标题到对应内容
      titleClick(index) {
        this.$refs.scroll.backtop(0, -this.DetailScrollY[index], 100)
      },
      //添加数据到购物车
      addToCart() {
        const product = {}
        product.image = this.DetailSwiperImage[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.lowNowPrice;
        product.iid = this.iid;
        this.$store.dispatch('addCart', product).then(res => {
          this.$toast.show(res)
        })
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
          this.showGoods = res.data.list
        })
      }
    },
    destroyed() {
      //删除$bus里面的方法
      this.$bus.$off('itemImageLoad', this.listImageLoad)
    }
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
    bottom: 49px;
    overflow: hidden;
    z-index: 9;
    background-color: #fff;
  }

</style>

<template>
  <div class='GoodsListItem' @click='goodsItmeClick'>
    <img v-lazy='getImage' alt="" @load='imageLoad'>
    <div class="goods-info">
      <p :title="goodsItem.title">{{goodsItem.title}}</p>
      <div>
        <span class="price">¥{{goodsItem.price}}</span>
        <img class="cfavItem" src="~assets/img/common/collect.svg" alt="">
        <span class="cfav">{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GoodsListItem',
    components: {},
    methods: {
      //监听img事件
      imageLoad() {
        this.$bus.$emit('itemImageLoad');
      },
      goodsItmeClick() {
        if (this.goodsItem.iid) {
          this.$router.push({
            path: '/detail',
            query: {
              iid: this.goodsItem.iid
            }
          })
        }
      }
    },
    props: {
      goodsItem: {
        type: Object,
        default: {}
      }
    },
    computed: {
      getImage() {
        // if (this.goodsItem.show.img) {
        //   return this.goodsItem.show.img
        // } else if (this.goodsItem.image) {
        //   return this.goodsItem.image
        // }
        return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      }
    }
  }

</script>
<style scoped>
  .GoodsListItem {
    padding-top: 5px;
    padding-bottom: 3px;
    text-align: center;
    width: 48%;
  }

  .GoodsListItem img {
    width: 100%;
    border-radius: 7px;
  }

  .goods-info {
    overflow: hidden;
  }

  .goods-info p {
    font-size: 13px;
    display: inline-block;
    white-space: nowrap;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
  }


  .price {
    color: var(--color-high-text);
    /* text-decoration: underline */
  }

  .cfavItem {
    margin-left: 10px;
    width: 14px !important;
    height: 14px
  }

</style>

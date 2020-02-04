<template>
  <div class='detail-shop-info' v-if='Object.keys(shops).length !== 0'>
    <div class="shop-logo">
      <img :src="shops.logo" alt="">
      <span>{{shops.name}}</span>
    </div>
    <div class="shops-introduce">
      <div class="shops-left">
        <span class="shops-sells">
          <p>{{getsells}}</p>
          <p>总销量</p>
        </span>
        <span class="shops-goodsCount">
          <p>{{shops.goodsCount}}</p>
          <p>全部宝贝</p>
        </span>
      </div>
      <div class="shop-describe">
        <table>
          <tr v-for='(item,index) in shops.score' :key='index'>
            <td>{{item.name}}</td>
            <td :class='{ture1:!item.isBetter,felse1:item.isBetter}'>{{item.score}}</td>
            <td><span :class='{ture2:!item.isBetter,felse2:item.isBetter}'>{{item.isBetter?'高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="btnclick">进店逛逛</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailShopInfo',
    components: {},
    props: {
      shops: {
        type: Object,
        default: {}
      }
    },
    computed: {
      getsells() {
        let sells = this.shops.sells
        if (sells < 10000) {
          return sells
        } else {
          return (sells / 10000).toFixed(1) + '万'
        }
      }
    }
  }

</script>
<style scoped>
  .detail-shop-info {
    padding-bottom: 20px;
    border-bottom: 4px solid rgba(100, 100, 100, .07);
  }

  .shop-logo img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 10px;
    margin-top: 20px;
  }

  .shop-logo span {
    position: relative;
    top: -27px;
    font-size: 20px;
  }

  .shops-introduce {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
  }

  .shops-left {
    border-right: 1px solid #ccc;
    display: flex;
  }

  .shops-sells p:first-child,
  .shops-goodsCount p:first-child {
    font-size: 20px;
    color: #444;
    text-align: center;
    width: 80px;
    padding-bottom: 7px;
  }

  .shops-sells p:nth-child(2),
  .shops-goodsCount p:nth-child(2) {
    font-size: 12px;
    font-weight: 700;
    color: #444;
    text-align: center;
    width: 80px;
  }

  .shop-describe {
    font-size: 13px;
  }

  .shop-describe td {
    padding: 6px;
    text-align: left;
  }

  .ture1 {
    color: #5ea732;
  }

  .felse1 {
    color: #f13e3a;
  }

  .ture2 {
    background-color: #5ea732;
    color: #fff;
  }

  .felse2 {
    color: #fff;
    background-color: #f13e3a;
  }

  .shop-bottom {
    margin-top: 10px;
  }

  .btnclick {
    width: 40%;
    height: 30px;
    border-radius: 10px;
    margin: 0 auto;
    text-align: center;
    background-color: rgba(100, 100, 100, .08);
    line-height: 30px;
  }

</style>

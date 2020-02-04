<template>
  <div class=''>
    <nav-bar>
      <div slot="left" class="detail-left" @click='backClick'>
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot='center' class="detail-center">
        <div v-for='(item,index) in titles' class="center-item" @click="titlesClick(index)"
          :class="{active:index === detailType}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        detailType: 0,
        titles: ['商品', '参数', '评论', '推荐']
      }
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      titlesClick(index) {
        this.detailType = index
      }
    },
  }

</script>
<style scoped>
  .detail-left img {
    margin-left: 10px;
    margin-bottom: -6px;
  }

  .detail-center {
    display: flex;
    font-size: 14px;
  }

  .center-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
    ;
  }

</style>

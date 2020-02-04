<template>
  <swiper class="swiperheight">
    <swiper-item v-for="(item, index) in DetailSwiperImage" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>
<script>
  import {
    Swiper,
    SwiperItem
  } from 'components/common/swiper'

  export default {
    name: 'DetailSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      DetailSwiperImage: {
        type: Array,
        default: []
      }
    }
  }

</script>
<style scoped>
  .swiperheight {
    height: 300px;
  }

</style>

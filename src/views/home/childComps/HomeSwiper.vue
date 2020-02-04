<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load='imageLoad'>
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
  import {
    Swiper,
    SwiperItem
  } from 'components/common/swiper'

  export default {
    name: 'HomeSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        imgload: true
      }
    },
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      imageLoad() {
        if (this.imgload) {
          this.$emit('swiperImageLoad')
        }
        this.imgload = false
      }
    }
  }

</script>
<style>

</style>

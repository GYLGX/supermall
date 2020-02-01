<template>
  <div class='recommendview'>
    <div v-for='item in recommends' class="recommendview-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'RecommendView',
    components: {},
    props: {
      recommends: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }

</script>
<style>
  .recommendview {
    display: flex;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: 10px solid #eee;
  }

  .recommendview-item {
    flex: 1;
  }

  .recommendview-item img {
    width: 70px;
    height: 70px;
  }

</style>

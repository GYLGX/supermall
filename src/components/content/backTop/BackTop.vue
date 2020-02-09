<template>
  <div class='BackTop'>
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>
<script>
  export default {
    name: 'BackTop',
    components: {}
  }

</script>
<style scoped>
  .BackTop img {
    position: fixed;
    right: 7px;
    bottom: 60px;
    height: 40px;
    z-index: 20;
  }

</style>

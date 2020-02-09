<template>
  <img :class="getClass" src="~assets/img/cart/tick.svg" alt="">
</template>
<script>
  export default {
    name: 'CheckButton',
    components: {},
    props: {
      checklist: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      getClass() {
        return this.checklist ? 'tick size' : 'not-tick size'
      }
    }
  }

</script>
<style scoped>
  .size {
    border-radius: 50%;
    margin-bottom: -4px;
  }

  .tick {
    background-color: red;
    border: 2px solid red;
  }

  .not-tick {
    background-color: #eee;
    border: 2px solid #eee;
  }

</style>

<template>
  <div class='tab-control'>
    <div v-for='(item,index) in titles' class="tab-control-item" :class="{active:index === currentIndex}"
      @click='itemClick(index)'>
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TabControl',
    components: {},
    data() {
      return {
        currentIndex: 1
      }
    },
    props: {
      titles: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabclick', index)
      }
    }
  }

</script>
<style>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: #eee;
    line-height: 44px;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 2px solid var(--color-high-text);
  }

</style>

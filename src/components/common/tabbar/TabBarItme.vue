<template>
  <div class="tab-bar-item ignore" @click='tabitemClick'>
    <div v-if='!isActive'>
      <slot name='item-icon'></slot>
    </div>
    <div v-else>
      <slot name='item-icon-active'></slot>
    </div>
    <div :style="activeStyle">
      <slot name='item-text'></slot>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'TabBarItme',
    props: {
      link: {
        type: String,
        required: true
      },
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {}
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle() {
        return this.isActive ? {
          color: this.activeColor
        } : {}
      }

    },
    methods: {
      tabitemClick() {
        if (this.$route.path != this.link) {
          //进行跳转
          this.$router.replace(this.link)
        }
      }

    },
    components: {}
  }

</script>
<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

</style>

<template>
  <div class='wrapper' ref='wrapper'>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    components: {},
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        scroll
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
      this.scroll.on('pullingUp', () => {
        //操作
        console.log('下拉加载更多');
        // 第一次下拉加载操作完后再次需要下拉加载时需要调用,不然只会加载一次
        // bscroll.finishPullUp()
      })
    },
    methods: {
      //指定到什么位置
      backtop(x, y, time = 500) {
        //先判断 this.scroll 是否已经生成然后在执行 scrollTo()
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
      },
      //刷新 scroll 的 scrollerHeight 属性
      refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      }
    }
  }

</script>
<style scoped>

</style>

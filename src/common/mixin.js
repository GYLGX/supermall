import {
  debounce
} from 'common/utils';

export const itemListenerMixin = {
  data() {
    return {
      listImageLoad: null
    }
  },
  mounted() {
    //监听item 中图片加载是否完成
    const refresh = debounce(this.$refs.scroll.refresh)
    this.listImageLoad = () => {
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.listImageLoad)
  }
};

import BackTop from 'components/content/backTop/BackTop'
export const scrollTopMixin = {
  data() {
    return {
      scrollTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    //回到顶部
    backClick() {
      this.$refs.scroll.backtop(0, 0)
    },
    showTop(position) {
      //到指定位置显示置顶图标
      this.scrollTop = -position.y > 1000
    },
  },
}

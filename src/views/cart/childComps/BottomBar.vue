<template>
  <div class='bottom-bar'>
    <div class="total">
      <check-button :checklist='isSelectAll' class="check-button" @click.native='checkClick'></check-button>
      <span>全选</span>
      <span>合计: ¥{{getPrice}}</span>
    </div>
    <div class="buy-product" @click='Calculation'>去计算({{getCheckLength}})</div>
  </div>
</template>
<script>
  import CheckButton from './CheckButton';

  export default {
    name: 'BottomBar',
    components: {
      CheckButton
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {
          this.$store.state.cartList.forEach(item => item.checklist = false)
        } else {
          this.$store.state.cartList.forEach(item => item.checklist = true)
        }
      },
      Calculation() {
        console.log('ddd');
      }
    },
    computed: {
      getPrice() {
        return this.$store.state.cartList.filter(item => {
          return item.checklist
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      getCheckLength() {
        return this.$store.state.cartList.filter(item => item.checklist).length
      },

      //全选显示
      isSelectAll() {
        if (this.$store.state.cartList.length === 0) return false
        return !this.$store.state.cartList.find(item => !item.checklist)
      }
    }
  }

</script>
<style scoped>
  .bottom-bar {
    box-shadow: 0 -1px 3px 1px rgba(0, 0, 0, .2);
    line-height: 44px;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  .bottom-menu {
    padding-left: 10px;
  }

  .total span:nth-child(2) {
    font-size: 14px;
    margin-right: 20px;
  }

  .buy-product {
    background-color: orangered;
    width: 30%;
    color: #fff;
  }

  .check-button {
    margin-left: 10px;
    margin-right: 5px;
  }

</style>

<template>
  <div class="payload">
    <div class="item-selector">
      <check-button :checklist='payload.checklist' @click.native='tickClick' />
    </div>
    <img class="image" :src="payload.image" alt="">
    <div class="payload-info">
      <p class="title overflow">{{payload.title}}</p>
      <p class="desc overflow">商品描述：{{payload.desc}}</p>
      <p class="price-count">
        <span class="price">¥{{payload.price}}</span>
        <span class="count">
          <span class="btn" @click='decrCount(payload.iid)'>-</span>
          <span class="number">×{{payload.count}}</span>
          <span class="btn" @click='addCount(payload.iid)'>+</span>
        </span>
      </p>
    </div>
  </div>
</template>
<script>
  import CheckButton from './CheckButton';

  export default {
    name: 'CartListItem',
    components: {
      CheckButton
    },
    props: {
      payload: {
        type: Object,
        default: {}
      }
    },
    methods: {
      decrCount(iid) {
        this.$store.dispatch('decrCount', iid)
      },
      addCount(iid) {
        this.$store.dispatch('addCount', iid)
      },
      tickClick() {
        this.payload.checklist = !this.payload.checklist
      }
    },
  }

</script>
<style scoped>
  .payload {
    display: flex;
    background-color: #fff;
    height: 100px;
    align-items: center;
    border-bottom: 2px solid rgba(100, 100, 100, .05);
  }

  .item-selector {
    width: 10%;
  }

  .item-selector {
    text-align: center;
  }

  .image {
    height: 90px;
    width: 70px;
    border-radius: 5px;
  }

  .overflow {
    white-space: nowrap;
    /* width: 50%; */
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .payload-info {
    padding: 10px;
    width: 75%;
  }

  .price-count {
    display: flex;
    justify-content: space-between;
  }

  .title {
    color: #000;
    margin-bottom: 8px;
    width: 70%;
  }

  .desc {
    font-size: 14px;
    margin-bottom: 15px;
    color: #aaa;
  }

  .count {
    display: flex;
    align-items: center;
  }

  .price {
    color: orangered;
  }

  .btn {
    display: block;
    height: 17px;
    width: 20px;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 14px;
    border-radius: 3px;
    margin: 0 10px;
    font-size: 12px;
    background-color: #ccc;
  }

  .number {
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    width: 40px;

  }

</style>

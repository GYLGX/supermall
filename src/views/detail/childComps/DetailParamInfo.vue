<template>
  <div class='detail-param-info' v-if='Object.keys(paramInfo).length !== 0'>
    <table class="rule">
      <tr v-for='(tr,index) in rule' :key='index'>
        <td v-for='(td,indez) in tr' :key='indez'>{{td}}</td>
      </tr>
    </table>
    <table class="info">
      <tr v-for='(item,indey) in info' :key='indey'>
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'DetailParamInfo',
    components: {},
    props: {
      paramInfo: {
        type: Object,
        default: {}
      }
    },
    computed: {
      rule() {
        return this.paramInfo.sizes[0]
      },
      info() {
        return this.paramInfo.infos
      }
    }
  }

</script>
<style scoped>
  .detail-param-info {
    padding-bottom: 20px;
    border-bottom: 4px solid rgba(100, 100, 100, .07);
  }

  .rule {
    margin: 20px;
    margin-bottom: 0;
    width: 90%;
    border-bottom: 2px solid rgba(100, 100, 100, .2);
    font-size: 14px;
  }

  tr {
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  tr td {
    height: 42px;
  }

  .info {
    margin-left: 20px;
    margin-right: 20px;
    width: 90%;
    font-size: 14px;
  }

  .info tr td:first-child {
    width: 80px;
  }

  .info tr td:nth-child(2) {
    color: var(--color-high-text);
  }

</style>

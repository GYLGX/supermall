import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex)

const state = {
  cartList: [{
      count: 1,
      desc: "敬酒服新娘2018新款春秋季结婚礼服红色鱼尾包臀连衣裙回门晚礼服",
      iid: "1m93p4u",
      image: "//s11.mogucdn.com/mlcdn/c45406/180927_5l59l9i252b2icj9lic1i4l6g2fae_640x960.jpg",
      price: "98.00",
      title: "敬酒服新娘2018新款春秋季结婚礼服红色鱼尾包臀连衣裙回门晚礼服",
      checklist: true
    },
    {
      count: 2,
      desc: "2018秋季新款韩版女套装双面呢外套高腰半身短裙裤子三件套",
      iid: "1m93p1c",
      image: "//s3.mogucdn.com/mlcdn/c45406/180927_1ili2a8l27gjijhi22f3dc24d139j_640x900.jpg",
      price: "69.00",
      title: "2018秋季新款韩版女套装双面呢外套高腰半身短裙裤子三件套",
      checklist: true

    }
  ]
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {}
})

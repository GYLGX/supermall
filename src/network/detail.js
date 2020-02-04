import {
  request
} from './request';

export function getdetaildata(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(columns, itemInfo, services) {
    this.title = itemInfo.title //标题
    this.desc = itemInfo.desc //描述
    this.priceColor = itemInfo.discountBgColor //价格颜色
    this.newPrice = itemInfo.price //新价格
    this.oldPrice = itemInfo.oldPrice //久价格
    this.discount = itemInfo.discountDesc //折扣
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.highNowPrice //最高价
  }
}
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo; //店铺头像
    this.name = shopInfo.name; //店铺名称
    this.sells = shopInfo.cSells; //总销量
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods //全部宝贝
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

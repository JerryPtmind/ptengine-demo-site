# Nimbus 轻雾 · Ptengine / PGA 演示站

一个虚构 DTC 品牌的三页静态站，用来亲手体验 Ptengine 的采集、热图、Experience（A/B 测试）和 PGA。

- `index.html` 首页：hero CTA、产品卡片（加入购物车）、FAQ、订阅表单
- `product.html` 商品页：立即购买 → 转化页
- `thanks.html` 转化页：页面加载时上报 `purchase` 事件

## 接入 Ptengine

编辑 `assets/ptengine.js`，把 `SID` 换成测试户站点设置里的 SID，`HOST` 按集群选择（js.ptengine.com / js.ptengine.jp / js.ptengine.cn）。

## 已埋的自定义事件

`hero_cta_click`、`hero_secondary_click`、`nav_product_click`、`add_to_cart`（带 sku/price）、`buy_now`、`faq_open`、`newsletter_submit`、`purchase`、`back_home`。

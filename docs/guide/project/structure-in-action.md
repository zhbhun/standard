# 项目结构优化实战

如下所示是某个项目的组织结构

```shell
.
├── public
│   ├── images
│   ├── js
│   ├── css
│   ├── favicon.ico
│   ├── index.html
│   └── version.txt
├── src
│   ├── api
│   ├── assets
│   │   ├── css
│   │   │   └── activityXXX.scss
│   │   │   └── activityYYY.scss
│   │   │   └── activityZZZ.scss
│   │   └── images
│   │       ├── activityXXX
│   │       ├── activityYYY
│   │       ├── activityZZZ
│   │       └── ...
│   ├── components
│   │   ├── Xyz.vue
│   │   ├── x-y-z.vue
│   │   └── xYz.vue
│   ├── config
│   ├── directive
│   ├── filters
│   ├── mixins
│   ├── router
│   ├── store
│   ├── types
│   ├── utils
│   ├── views
│   │   ├── activities
│   │   │   ├── activity1
│   │   │   ├── activity2
│   │   │   ├── activity3
│   │   ├── activityXxx
│   │   │   └──  index.vue
│   │   ├── activituYyy
│   │   │   └── Index.vue
│   │   ├── allOrder
│   │   │   └── index.vue
│   │   ├── orderDetail
│   │   │   └── Index.vue
│   │   ├── guide
│   │   │   └── Index.vue
│   │   ├── goods
│   │   │   └── Index.vue
│   │   ├── xxxGoods
│   │   │   └── Index.vue
│   │   ├── yyyGoods
│   │   │   └── Index.vue
│   │   ├── zzzGoods
│   │   │   └── Index.vue
│   │   ├── license
│   │   ├── not-found
│   │   ├── openSectionActivies
│   │   │   └── index.vue
│   │   └── Index.vue
│   ├── App.vue
│   ├── main.js
│   └── shims-vue.d.ts
├── README.md
├── babel.config.js
├── jsconfig.json
├── package.json
├── postcss.config.js
├── tsconfig.json
├── vue.config.js
└── yarn.lock
```

存在哪些问题？

1. 静态资源全部放在全局的 `./src/assets` 目录下，且没有明确的管理模式，导致在组件引用静态资源的时候需要使用复杂的相对路径应用，例如：`../../../images/pay/vip_bg.png`。

    虽然可以配置别名直接从根目录开始引用，但大多项目都没有配置，或者开发人员不懂得如何配置。此外，一个 UI 组件的组成部分就是应该由模板、代码、样式和静态资源，这些都应该放在一块才能更加方便的维护。

2. 所有接口请求都放在了网络请求层目录里了，导致随着业务的迭代，全局目录下的 API 越来越多，可阅读性变差，后续维护成本也变得越来越高。

    开发人员需要区分某个接口是否是全局共用的还是特定场景使用的，如果不需要全局复用，请把相关的接口请求封装在各自的业务模块里。

3. 全局组件目录的问题和网络请求接口类似，在该目录下放置了太多特定场景使用的组件了。

    将模块放到全局目录下时，开发人员都应该慎重考虑，全局组件目录更应该放置一些业务无关的基础组件。如果大家在开发的过程中无法判定放在哪里，可以先放业务模块里，在后续开发过程中再考虑是否封装到全局。

4. 路由页面的子目录没有规范的管理模式，不同的开发人员因个人喜好不同创建了不同的目录，而且命名规则也不一致。

    现有的会员路由目录没有明确的业务模块划分，每个路由大多都是平铺放在根目录下，导致 会员项目主要包含四块业务：会员中心、会员频道、会员活动和会员订单，开发者


## 总结

**分而治之**

> 分而治之是一种很古老但很实用的策略，或者说战略。本意即使将一个较大的力量打碎分成小的力量，这样每个小的力量都不足以对抗大的力量。在现实应用中，分而治之往往是阻止小力量联合起来的策略。
>
> 在计算机科学中，分治法是建基于多项分支递归的一种很重要的算法范式。字面上的解释是“分而治之”，就是把一个复杂的问题分成两个或更多的相同或相似的子问题，直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并。这个技巧是很多高效算法的基础，如排序算法（快速排序、归并排序）、傅立叶变换（快速傅立叶变换）。

在我们项目开发中也是同样的，我们应该将一个项目按一定的规则拆分成一个个小模块，从而降低我们的开发难度，反之如果项目内部没有合理的划分规则，导致一个个小问题交差组合变成了一个大问题，也就成了“屎山”。

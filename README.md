# vue-mobile-seed

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 本项目说明：
    为了方便自己快速搭建移动端项目 配置了这个脚手架
    使用了lib-flexible 和 px2remLoader
    所有css px单位会自动转为rem

## px2remLoader：

     直接写px，编译后会直接转化成rem ---- 除开下面两种情况，其他长度用这个
     在px后面添加/*no*/，不会转化px，会原样输出。 --- 一般border需用这个
     在px后面添加/*px*/,会根据dpr的不同，生成三套代码。---- 一般字体需用这个，dpr为1时chorme显示最小字体为12px，

## scss bourbon:
    用了sass-resources-loader 把bourbon全局引入
    https://www.bourbon.io/


## vue-lazyload:
      < img class="item-pic" v-lazy="newItem.picUrl"/ >这么使用就好  main.js 中有加载中 加载失败  默认情况的配置项




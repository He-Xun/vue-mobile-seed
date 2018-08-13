import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import artical from '@/pages/artical'
import about from '@/pages/about'
import counter from '@/pages/counter'
import notFoundPage from  '@/pages/notFoundPage'

Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: notFoundPage,
      meta: {keepAlive: true, isTop: false, title: '404'},
    },
    {
      path: '/',
      name: 'root',
      component: home,
      meta: {
        title: "首页"
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: "首页"
      }
    },
    {
      path: '/artical',
      name: 'artical',
      component: artical,
      meta: {
        title: "文章"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        keepalive: true,
        title: "关于"
      }
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter,
      meta: {
        title: "计数器"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.content) {
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta)
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


export default router

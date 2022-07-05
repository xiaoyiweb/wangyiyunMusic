import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'

// 安装路由
Vue.use(VueRouter)
import layout from '@/views/layout'
import play from '@/views/play'
import search from '@/views/search'
import home from '@/views/home'

// 准备路由规则
const routes = [
  { path: '', redirect: '/layout/home' },
  {
    name: 'layout', path: '/layout', component: layout, children: [
      { name: 'home', path: 'home', component: home, meta: { title: '首页' } },
      { name: 'search', path: 'search', component: search, meta: { title: '搜索' } }
    ]
  },
  { name: 'play', path: '/play', component: play }

]

// 创建路由对象
export const router = new VueRouter({
  routes
})




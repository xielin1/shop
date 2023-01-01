import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const router =new Router({
    routes:[
        {
            path:'',
            redirect:'/home'
        },
        {
            path:'/home',
            component:()=>import('pages/Home/Home.vue')
        },
        {
            path:'/category',
            component:()=>import("pages/Category/Category.vue")
        },
        {
            path:'/cart',
            component:()=>import('pages/Cart/Cart')
        },
        {
            path:'/profile',
            component:()=>import('pages/Profile/Profile')
        },
    ],
    mode:'history'
})

// 解决导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
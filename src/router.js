import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Orderlist from './views/Orderlist.vue';
import Profile from './views/Profile.vue';
import Dynamic from './views/studyRouter/Dynamic.vue';
import Userhome from './views/studyRouter/Userhome.vue';
import Head from './views/studyRouter/Head.vue';
import Slidebar from './views/studyRouter/Slidebar.vue';
import Main from './views/studyRouter/Main.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { path: '/Orderlist/user1' },
      components: {
        default: Main,
        head: Head,
        slidebar: Slidebar,
      },
      
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/Orderlist/:id',
      name: 'Orderlist',
      props: { newsletterPopup: false },
      component: Orderlist,
      children: [
        {
          path: 'profile',
          component: Profile,
        },
        {
          path: '', //空路由，不写路径的时候默认渲染这个页面
          component: Userhome,
          
        }],
    }, {
      path: '/Dynamic-*',
      name: 'Dynamic',
      component: Dynamic,
    }, {
      path: '*',
      name: 'Dynamic',
      component: Dynamic,
    },
  ],
});

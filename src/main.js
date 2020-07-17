import Home from './components/Home.vue'
import Sites from './components/Sites.vue'
import Projects from './components/Projects.vue'
import Blog from './components/Blog.vue'
import BlogInside from './components/BlogInside.vue'
import NotFound from './components/404.vue'
import Businesses from './components/Businesses.vue'
import Contact from './components/Contact.vue'

import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routeTable = [
  { path: '/', component: Home, name:'Home', meta:{title: "Justin Dowty - Portfolio"} },
  { path: '/web', component: Sites, name:'Web', meta:{title: "Justin Dowty - Sites" } },
  { path: '/projects', component: Projects, name:'Projects', meta:{title: "Justin Dowty - Projects"} },
  { path: '/blog', component: Blog, name:'Blog', meta:{title: "Justin Dowty - Blog"} },
  { path: '/blog/:file', component: BlogInside, props: true, name:'BlogInside', meta:{title: "Justin Dowty - Blog"} },
  { path: '/businesses', component: Businesses, name:'Businesses', meta:{title: "Justin Dowty - Businesses"} },
  { path: '/contact', component: Contact, name:'Contact', meta:{title: "Justin Dowty - Contact"} },
  { path: '/*', component: NotFound, name: "NotFound", meta:{title: "Justin Dowty - 404"} }
];

const appRouter = new VueRouter({
  mode: 'history',
  base: '/',
  routes: routeTable
});

appRouter.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

new Vue({
  render: h => h(App),
  router: appRouter
}).$mount('#app');

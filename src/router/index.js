import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Explorable from "../views/Explorable.vue";
import ArticleList from "../views/ArticleList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/explorable",
    name: "Explorable",
    component: Explorable,
  },
  {
    path: "/articles",
    name: "ArticleList",
    component: ArticleList,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

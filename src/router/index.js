import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AttentionalBias from "../views/AttentionalBias.vue";
import ArticleList from "../views/ArticleList.vue";
import Resources from "../views/Resources.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/attentionbias",
    name: "AttentionalBias",
    component: AttentionalBias,
  },
  {
    path: "/articles",
    name: "ArticleList",
    component: ArticleList,
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

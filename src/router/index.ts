import Vue from "vue";
import VueRouter, { Route, RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import { i18n } from "@/i18n";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
    // beforeEnter(to: Route, from: Route, next: any) {
    //   console.log("entering home");
    //   loadLanguageAsync(i18n.locale, "global").then(next());
    // }
  },
  {
    path: "/about",
    name: "about",
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
    // beforeEnter(to: Route, from: Route, next: any) {
    //   console.log("entering About");
    //   loadLanguageAsync(i18n.locale, "about").then(next());
    // }
  }
];

const router = new VueRouter({
  routes
});

export default router;

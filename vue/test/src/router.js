import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Bb from "./views/Bb";
import Bb2 from "./views/Bb.2";
import Ellipsis from "./views/Ellipsis";
import AppComponent from "./views/VueAppComponent";
import AppComponent2 from "./views/VueAppComponent2";

Vue.use(Router);

export default new Router({
  // mode: "history",
  mode: "hash",
  base:
    process.env.NODE_ENV === "production"
      ? "/demos/vue/test/dist/"
      : process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/bb",
      name: "bidirectional-bindings",
      component: Bb
    },
    {
      path: "/bb2",
      name: "bidirectional-bindings-2",
      component: Bb2
    },
    {
      path: "/2-line-ellipsis",
      name: "2-line-ellipsis",
      component: Ellipsis
    },
    {
      path: "/app-component",
      name: "app-component",
      component: AppComponent
    },
    {
      path: "/app-component-2",
      name: "app-component-2",
      component: AppComponent2
    }
  ]
});

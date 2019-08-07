import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Bb from "./views/Bb.vue";
import Bb2 from "./views/Bb.2.vue";

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
    }
  ]
});

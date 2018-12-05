import Vue from "vue";
import Router from "vue-router";
import StaticRouter from "./modules/static";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: StaticRouter
});

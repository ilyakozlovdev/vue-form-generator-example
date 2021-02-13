import Vue from "vue";
import VueRouter from "vue-router";
import Showcase from "@/views/showcase/showcase";
import Welcome from "@/views/welcome/welcome";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:showcaseName/:tab",
    component: Showcase
  },
  {
    path: "/",
    component: Welcome
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

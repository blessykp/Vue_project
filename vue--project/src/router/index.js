import Vue from "vue";
import VueRouter from "vue-router";
import ChooseView from "../views/Choose.vue";
import AboutView from "../views/About.vue";
import ServiceView from "../views/Service.vue";
import TeamView from "../views/Team.vue";
import ContactView from "../views/Contact.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/services",
    name: "ServiceView",
    component: ServiceView,
  },
  {
    path: "/team",
    name: "TeamView",
    component: TeamView,
  },
  {
    path: "/contactView",
    name: "ContactView",
    component: ContactView,
  },
  {
    path: "/choose",
    name: "ChooseView",
    component: ChooseView,
  },
  {
    path: "/",
    name: "Home",
    // meta: { layout: "HomeLayout" },
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
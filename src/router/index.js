import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import AboutComp from "../views/AboutComp.vue";
import ContactUs from "../views/ContactUs.vue";
import ErrorPage from "../views/ErrorPage.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "About",
    component: AboutComp,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactUs,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

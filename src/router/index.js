import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from "../views/EventDetails.vue";
import EventCreate from "../views/EventCreate.vue";
import AboutComp from "../views/AboutComp.vue";
import ContactUs from "../views/ContactUs.vue";
import ErrorPage from "../views/ErrorPage.vue";
import ErrorDisplay from "../views/ErrorDisplay.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/create",
    name: "EventCreate",
    component: EventCreate,
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
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
  {
    path: "/error/:error",
    name: "ErrorDisplay",
    props: true,
    component: ErrorDisplay,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

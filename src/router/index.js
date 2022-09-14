import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/index.vue";
import Credencials from "../views/Credentails";
import Feedbacks from "../views/Feedback";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/credentials",
    name: "Credentials",
    component: Credencials,
    meta: {
      hasAuth: true,
    },
  },
  {
    path: "/feedbacks",
    name: "Feedbacks",
    component: Feedbacks,
    meta: {
      hasAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SitePortfolio from "../components/SitePortfolio.vue";
import SiteExperience from "../components/SiteExperience.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: SitePortfolio,
    props: {
      category: "highlight",
      title: "Highlighted projects and experience",
    },
  },
  {
    path: "/experience",
    component: SiteExperience,
  },
  {
    path: "/projects",
    component: SitePortfolio,
    props: {
      category: "project",
      title: "Projects",
    },
  },
  {
    path: "/open-source",
    component: SitePortfolio,
    props: {
      category: "open-source",
      title: "Open-source projects",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

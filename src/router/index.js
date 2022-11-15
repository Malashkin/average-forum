/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable quotes */

import PageHome from "@/components/PageHome";
import PageThreadShow from "@/components/PageThreadShow";
import PageNotFound from "@/components/PageNotFound.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: PageHome },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: PageThreadShow,
    props: true,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: PageNotFound },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

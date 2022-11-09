/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable quotes */

import PageHome from "@/components/PageHome";
import PageThreadShow from "@/components/PageThreadShow";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: PageHome },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: PageThreadShow,
    props: true,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable quotes */
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";

const forumApp = createApp(App);

forumApp.use(router);
forumApp.mount("#app");

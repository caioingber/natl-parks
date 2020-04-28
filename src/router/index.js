import Vue from "vue";
import VueRouter from "vue-router";
import Detail from "../views/Detail.vue";
import List from "../views/List.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/park/:id",
    name: "Detail",
    component: Detail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

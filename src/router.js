import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Tomus from "./components/Tomus.vue";
import Statistics from "./components/statistics/Statistics.vue";

const routes = [
    {path: "/", name: "Home", component: Home},
    {path: "/tomus", name: "Tomus", component: Tomus},
    {path: "/statistics", name: "Statistics", component: Statistics},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

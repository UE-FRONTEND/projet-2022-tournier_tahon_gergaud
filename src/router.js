import { createWebHistory, createRouter } from "vue-router";
import App from "@/App";
import Home from "./components/Home.vue";
import Game from "./components/Game.vue";
import Statistiques from "./components/statistiques/Statistiques.vue";

const routes = [
    {path: "/", name: "Home", component: Home},
    {path: "/game", name: "Game", component: Game},
    {path: "/statistiques", name: "Statistiques", component: Statistiques},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import DashBoard from "../views/DashBoard.vue";
import LandingPage from "../views/LandingPage.vue";
import HomePage from "../views/HomePage.vue";
import History from "../views/History.vue";
import Library from "../views/Library.vue";
import Details from "../views/Details.vue";
import ContactSupport from "../views/ContactSupport.vue";
import FrequentlyAsked from "../views/FrequentlyAskedQuestions.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/dashboard",
        component: DashBoard,
    },
    {
        path: "/history",
        component: History,
    },
    {
        path: "/library",
        component: Library,
    },
    {
        path: "/details/:id",
        component: Details,
    },
    {
        path: "/contactsupport",
        component: ContactSupport,
    },
    {
        path: "/faqs",
        component: FrequentlyAsked,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

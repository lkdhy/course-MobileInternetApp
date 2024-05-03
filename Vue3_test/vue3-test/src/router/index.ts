import {createRouter, createWebHistory} from "vue-router";

import counter from "@/pages/counter.vue";
import userinput from "@/pages/userinput.vue";
import index from "@/pages/index.vue";

const routes =
    [
        {
            path: '/', name: 'Index', component: index
        },
        {
            path: '/counter', name: 'Counter', component: counter
        },
        {
            path: '/userinput', name: 'UserInput', component: userinput
        }
    ];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

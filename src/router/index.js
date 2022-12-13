import { createRouter, createWebHistory } from 'vue-router';


import Register from '../components/Conversor';



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Register
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import Lesson1 from '../views/Lesson1.vue';
import Lesson2 from '../views/Lesson2.vue';
import Lesson3 from '../views/Lesson3.vue';
import Lesson4 from '../views/Lesson4.vue';
import Lesson5 from '../views/Lesson5.vue';

const routes = [
    { path: '/', component: Lesson1 },
    { path: '/lesson2', name: 'lesson2', component: Lesson2 },
    { path: '/lesson3', name: 'lesson3', component: Lesson3 },
    { path: '/lesson4', name: 'lesson4', component: Lesson4 },
    { path: '/lesson5', name: 'lesson5', component: Lesson5 }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

import Home from '@/02_pages/Home.vue'
import About from '@/02_pages/About.vue'

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: Home,
        meta: {}
    },
    { 
        path: '/about', 
        name: 'about',
        component: About,
        meta: {
            transition: 'transition-about'
        } 
    }
];

export default routes;
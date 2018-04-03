import Home from '@/02_pages/Home.vue'
import About from '@/02_pages/About.vue'

const routes = [
    { 
        path: '/', 
        component: Home,
        meta: {}
    },
    { 
        path: '/about', 
        component: About,
        meta: {
            transition: 'transition-about'
        } 
    }
];

export default routes;
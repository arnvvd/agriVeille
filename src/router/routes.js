import Home from '@/02_pages/Home.vue'
import About from '@/02_pages/About.vue'
import Article from '@/02_pages/Article.vue'

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
    },
    { 
        path: '/article/:storyTitle', 
        name: 'article',
        component: Article,
        meta: {} 
    }
];

export default routes;
import Home from '@/02_pages/Home.vue'
import About from '@/02_pages/About.vue'
import Article from '@/02_pages/Article.vue'

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: Home,
        meta: {
            back: false
        }
    },
    { 
        path: '/about', 
        name: 'about',
        component: About,
        meta: {
            transition: 'transition-about',
            back: true
        } 
    },
    { 
        path: '/article/:storySlug', 
        name: 'article',
        component: Article,
        meta: {
            back: true
        } 
    }
];

export default routes;
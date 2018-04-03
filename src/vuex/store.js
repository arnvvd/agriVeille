'use strict';
/* Import Vue*/
import Vue from 'vue';
import Vuex from 'vuex';

/* Use Vuex*/
Vue.use(Vuex);

/*Import stores*/
import storiesStore from './stories/store';

/*Debug if Env = production*/
const debug = process.env.NODE_ENV !== 'production';


export default new Vuex.Store({
    /*Modules we need*/
    modules: {
        storiesStore
    },
    strict: debug,
    middlewares: debug
});
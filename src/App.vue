<template>
  <main id="app">

    <!-- Loader-->
    <transition name="transition-loader">
        <loader v-if="!getDatasFetched"></loader>
    </transition>

    <!-- Main Navigation-->
    <navigation></navigation>

    <!-- Router-->
    <transition :name="transitionName">
        <router-view></router-view>
    </transition> 
    
  </main>
</template>


<script>

    /*Import*/
    import debounce from '@/assets/js/utils/debounce.js';
    import Emitter from '@/core/eventemitter.js'; 
    import {
        WINDOW_RESIZE
    } from '@/core/messages.js';

    /*Import Components*/
    import Navigation from '@/01_layout/Navigation.vue';
    import Loader from '@/01_layout/Loader.vue';

    /* Import Action STORE*/
    import { mapActions, mapGetters } from 'vuex';
    

    export default {
        data () {
            return {
                transitionName: 'transition-page'
            }
        },

        components: {
            'navigation': Navigation,
            'loader': Loader
        },


        computed: {
            ...mapGetters([
                'getDatasFetched'
            ])
        },


        methods: {
            ...mapActions(['setStories']),

            bindEvents() {
                if (!this._bindedResize) {
                    this._bindedResize = debounce(this.onResize.bind(this), 100);
                    window.addEventListener('resize', this._bindedResize);
                }
            },

            unbindEvents() {
                if (this._bindedResize) {
                    window.removeEventListener('resize', this._bindedResize);
                    this._bindedResize = null;
                }
            },

            onResize( evt ) {
                Emitter.emit(WINDOW_RESIZE, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
        },


        mounted() {
            this.bindEvents();
            this.setStories();
        },


        beforeDestroy() {
            this.unbindEvents();
        },


        watch: {
            '$route' (to, from) {
                if (to.meta.transition) {
                    this.transitionName = to.meta.transition
                } else {
                    this.transitionName = 'transition-page'
                }  
            }
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "~styles/main.scss";

    #app {
        position: relative;
        min-height: 100vh;
    }
</style>


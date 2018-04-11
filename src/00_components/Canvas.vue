<template>
    <div class="canvas"></div>
</template>

<script>
    /* Import */
    import Canvas from '@/assets/js/canvas';
    import {Tweenmax} from 'gsap';
    import Emitter from '@/core/eventemitter.js'; 
    import {
        WINDOW_RESIZE,
        CANVAS_CLICK,
        IS_ANIMATED
    } from '@/core/messages.js';

    /* Vue Imports */
    import router from '@/router'

    /* Import Action STORE*/
    import { mapGetters } from 'vuex';

    export default {
    	data() {
    		return {}
        },
        computed: {
            ...mapGetters(['getCurrentStory'])
        },
        methods: {
            
            initCanvas(id) {
                // Root
                this.el = document.body.querySelector('.canvas');
                this.DELTA_TIME = 0;
                this.LAST_TIME = Date.now();
                this.canvas = new Canvas(this.el, {
                    currentStory: id
                });
                this.canvas.attachToContainer();
            },

            bindEvents() {
                Emitter.on(CANVAS_CLICK, this.canvasClick = (args) => {
                    router.push({ name: 'article', params: { storySlug: args.slug }})
                });

                Emitter.on(WINDOW_RESIZE, this.canvasResize = (args) => {
                    this.canvas.width = args.width
                    this.canvas.height = args.height
                    this.canvas.resize(args.width, args.height);
                });

                Emitter.on(IS_ANIMATED, this.illuAnimated = (args) => {
                    this.$store.dispatch('setIsNotAnimated')
                })
                
                if (!this._bindedUpdate) {
                    this._bindedUpdate = this.update.bind(this);
                    TweenMax.ticker.addEventListener( 'tick', this._bindedUpdate)
                }
            },

            unbindEvents() {
                Emitter.off(CANVAS_CLICK, this.canvasClick);
                Emitter.off(WINDOW_RESIZE, this.canvasResize);
                
                if (this._bindedUpdate) {
                    TweenMax.ticker.removeEventListener('tick', this._bindedUpdate);
                    this._bindedUpdate = null;
                }
            },

            update() {
                this.DELTA_TIME = Date.now() - this.LAST_TIME;
                this.LAST_TIME = Date.now();

                this.canvas.update( this.DELTA_TIME );
                this.canvas.render();
            }
        },
        mounted() {
            if (this.getCurrentStory.id) {
                this.initCanvas(this.getCurrentStory.id);
            } else {
                this.initCanvas(0);
            }

            this.bindEvents();
            
        },

        beforeDestroy() {
            this.unbindEvents();
        },

        watch: {
            getCurrentStory : function(val) {
                this.canvas.nikita(val.id, val.slug)
                this.$store.dispatch('setIsAnimated')
            } 
        }
    }
</script>

<style lang="scss">
    .canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 0;
        background: rgba(248, 203, 93, .3);
    } 
</style>
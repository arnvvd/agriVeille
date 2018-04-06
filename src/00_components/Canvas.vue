<template>
    <div class="canvas"></div>
</template>

<script>
    /* Import */
    import Canvas from '@/assets/js/canvas';
    import {Tweenmax} from 'gsap';
    import Emitter from '@/core/eventemitter.js'; 
    import {
        WINDOW_RESIZE
    } from '@/core/messages.js';


    export default {

    	data() {
    		return {}
        },

        methods: {
            bindEvents() {
                Emitter.on(WINDOW_RESIZE, this.canvasResize = (args) => {
                    this.canvas.width = args.width
                    this.canvas.height = args.height
                    this.canvas.resize(args.width, args.height);
                });
                
                if (!this._bindedUpdate) {
                    this._bindedUpdate = this.update.bind(this);
                    TweenMax.ticker.addEventListener( 'tick', this._bindedUpdate)
                }
            },

            unbindEvents() {
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
            // Root
            this.el = document.body.querySelector('.canvas');

            this.DELTA_TIME = 0;
            this.LAST_TIME = Date.now();

            this.canvas = new Canvas(this.el);
            this.canvas.attachToContainer();

            this.bindEvents();
        },

        beforeDestroy() {
            this.unbindEvents();
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
        z-index: -1;
    } 
</style>
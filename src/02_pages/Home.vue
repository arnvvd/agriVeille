<template>
    <div class="home">
        <home-canvas></home-canvas>
        <gauge></gauge>
        <transition name="transition-onboarding">
            <onboarding v-if="!getIsOnboarded"></onboarding>
        </transition>
        <transition name="transition-ending">
            <ending v-if="getIsEnded"></ending>
        </transition>
        <div class="home__category heading--8">
            {{getCurrentStory.title}}
        </div> 
    </div>
</template>


<script>
import Canvas from '@/00_components/Canvas.vue';
import Gauge from '@/00_components/Gauge.vue';
import Onboarding from '@/01_layout/Onboarding.vue';
import Ending from '@/01_layout/Ending.vue';

/* Import Action STORE*/
import { mapActions, mapGetters } from 'vuex';

export default {
    data () {
        return {
          mousewheelevt: (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"
        }
    },
    components: {
        'homeCanvas': Canvas,
        Gauge,
        Onboarding,
        Ending
    },
    computed: {
        ...mapGetters([
            'getIsOnboarded',
            'getIsEnded',
            'getIsAnimated',
            'getCurrentStory'
        ])
    },
    methods: {
        bindEvents() {
            console.log('je bind les events')

            if (!this._bindedScrollJack) {
                this._bindedScrollJack = this.onScrollJack.bind(this);
                if (document.attachEvent) {
                    document.attachEvent(`on${this.mousewheelevt}`, this._bindedScrollJack)
                } else if (document.addEventListener) {
                    document.addEventListener(this.mousewheelevt, this._bindedScrollJack)
                }
            }
        },
        unbindEvents() {
            console.log('unbind les events')

            if (this._bindedScrollJack) {
                if (document.attachEvent) {
                    document.detachEvent(`on${this.mousewheelevt}`, this._bindedScrollJack)
                } else if (document.addEventListener) {
                    document.removeEventListener(this.mousewheelevt, this._bindedScrollJack)
                }
                this._bindedScrollJack = null;
            }
        },
        onScrollJack(e) {
            const evt = window.event || e; //equalize event object
            const delta = evt.detail ? evt.detail : (evt.wheelDelta / -120); //check for detail first so Opera uses that instead of wheelDelta
            if(delta > 2 && !this.getIsAnimated) {
                this.$store.dispatch('setDigitalValue', 1)
            } else if(delta < -2 && !this.getIsAnimated) {
                this.$store.dispatch('setDigitalValue', -1)
            }

            e.preventDefault();
        }
    },
    mounted() {
        if (this.getIsOnboarded) {
            this.bindEvents();
        }
    },
    destroyed() {
        if (this.getIsOnboarded) {
            this.unbindEvents();
        }
    },  
    watch: {
        getIsOnboarded : function(val) {
            if (val) {
                this.bindEvents();
            }
        } 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .home {
        position: relative;
        padding: 4rem 0;
        min-height: 100vh;
        overflow: hidden;

        &__category {
            display: inline-block;
            vertical-align: top;
            position: fixed;
            bottom: 3rem;
            left: 50%;
            padding: 1rem 3rem;
            transform: translateX(-50%);
            background-color: #A5A39F;
            border: 3px solid #000;
            border-radius: 10rem;   
            text-transform: uppercase;
            z-index: 0;

            &:before {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                width: calc(100% - .6rem);
                height: calc(100% - .6rem);
                background-color: #C9C57A;
                transform: translate(-50%, -50%);
                border-radius: 10rem;   
                z-index: -1;
            }
        }
    }
</style>

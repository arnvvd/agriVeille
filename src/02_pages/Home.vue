<template>
    <div class="home">
        <h1>{{title}}</h1>
        <home-canvas></home-canvas>
        <transition name="transition-onboarding">
            <onboarding v-if="!getIsOnboarded"></onboarding>
        </transition> 
    </div>
</template>


<script>
import Canvas from '@/00_components/Canvas.vue';
import Onboarding from '@/01_layout/Onboarding.vue';

/* Import Action STORE*/
import { mapActions, mapGetters } from 'vuex';

export default {
    data () {
        return {
          title: 'Hello Home',
          mousewheelevt: (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"
        }
    },
    components: {
        'homeCanvas': Canvas,
        Onboarding
    },
    computed: {
        ...mapGetters([
            'getIsOnboarded',
            'getIsAnimated'
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
            console.log(delta);
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
    }
</style>

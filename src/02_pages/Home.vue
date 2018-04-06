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
import { mapGetters } from 'vuex';

export default {
    data () {
        return {
          title: 'Hello Home'
        }
    },
    components: {
        'homeCanvas': Canvas,
        Onboarding
    },
    computed: {
        ...mapGetters([
            'getIsOnboarded',
        ])
    },
    methods: {
        bindEvents() {
            console.log('je bind les events')
        },
        unbindEvents() {
            console.log('unbind les events')
        }
    },
    mounted() {
        console.log(this.getIsOnboarded);
        if (this.getIsOnboarded) {
            this.bindEvents();
        }
    },  
    watch: {
        getIsOnboarded : function(val) {
            console.log(val)
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

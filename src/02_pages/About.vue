<template>
    <div class="about">
        <div class="about__wrapper">
            <timeline-global v-if="getStories" :stories="getStories"></timeline-global>
            <reference v-if="getStories" :stories="getStories"></reference>
        </div>
    </div>
</template>

<script>
    /* Import Action STORE*/
    import { mapGetters } from 'vuex';
    import TimelineGlobal from '@/00_components/TimelineGlobal.vue';
    import Reference from '@/00_components/Reference.vue';

    export default {
        data () {
            return {
                title: 'About Nikita Shader Boss',
                fetchedStories: []
            }
        },
        components: {
            TimelineGlobal, Reference
        },
        computed: {
            ...mapGetters(['getStories'])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .about {
        background-color: #fdf0d1; //green
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &__wrapper {
            display: block;
            margin: 0 auto;
            max-width: 120rem;
            padding: 10rem 4rem;
            width: 100%;
        }
    }
</style>

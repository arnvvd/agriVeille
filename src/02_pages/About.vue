<template>
    <div class="about">
        <timeline-global v-if="getStories" :stories="getStories"></timeline-global>
        <reference v-if="getStories" :stories="getStories"></reference>
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
        background-color: #e6e5c3; //green
        padding: 4rem 10%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>

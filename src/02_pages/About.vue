<template>
    <div class="about">
        <timeline-global v-if="getStories" :stories="getStories"></timeline-global>
    </div>
</template>

<script>
    /* Import Action STORE*/
    import { mapGetters } from 'vuex';
    import TimelineGlobal from '@/00_components/TimelineGlobal.vue';

    export default {
        data () {
            return {
                title: 'About Nikita Shader Boss',
                fetchedStories: []
            }
        },
        components: {
            TimelineGlobal
        },
        computed: {
            ...mapGetters(['getStories'])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .about {
        padding: 4rem 0;
    }
</style>

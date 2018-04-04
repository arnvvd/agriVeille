<template>
    <article v-if="story" class="article">
        <h1 v-html="story.id"></h1>
       {{story}} 
    </article>
</template>

<script>
    /* Import Action STORE*/
    import { mapActions, mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters(['getStoryBySlug']),
            story: function () {
                return this.getStoryBySlug(this.$route.params.storySlug);
            }
        },
        mounted() {
            console.log(this.$route.params.storySlug)
        }
    }
</script>

<template>
    <article v-if="story" class="article">
        <h1 v-html="story.title"></h1>
        <ul>
            <li v-for="(item, index) in story.data" :key="index">
                <p>{{item.date | formatDate}}</p>
                <p v-html="item.text"></p>
            </li>
        </ul>
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
            console.log(this.$route)
        }
    }
</script>

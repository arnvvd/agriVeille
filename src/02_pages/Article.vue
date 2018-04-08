<template>
    <article v-if="story" class="article">

        <header class="article__header">
            <div class="article__banner">
                <router-link :to="{name: 'home'}">
                    <img :src="banner" alt="Bannière de John">
                </router-link>
            </div>
        </header>
        <div class="article__wrapper">
            <div class="article__content">
                <div class="article__content--left">
                    <h1 class="article__title heading--1" v-html="story.title"></h1>
                    <ul class="article__section__list">
                        <li class="js-scroll-active" v-for="(item, index) in story.data" :key="index">
                            <section class="article__section">
                                <h2 class="article__section__title heading--2">{{item.subtitle}}</h2>
                                <p class="article__section__published teasing--3">Published on {{item.date | formatDate}} by John</p>
                                <p class="article__section__content teasing--1" v-html="'&laquo;&nbsp;' + item.text + '&nbsp;&raquo;'"></p>
                            </section>
                        </li>
                    </ul>
                </div>
                <div class="article__content--right">
                    <article-profile></article-profile>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    import banner from '../../static/assets/svg/banner.svg'

    import ArticleProfile from '@/00_components/ArticleProfile.vue';
    import ScrollActive from '@/assets/js/classes/ScrollActive.js';

    /* Import Action STORE*/
    import { mapActions, mapGetters } from 'vuex';

    export default {
        data () {
            return {
                banner: banner
            }
        },
        components: {
            ArticleProfile
        },
        computed: {
            ...mapGetters(['getStoryBySlug']),
            story: function () {
                return this.getStoryBySlug(this.$route.params.storySlug);
            }
        },
        updated() { 
            // Active Class
            const $appearEl = document.querySelectorAll('.js-scroll-active');

            if ($appearEl) {
                [].forEach.call($appearEl, (item, i) => {
                    new ScrollActive(item, {
                        screenOffset: "bottom", // or "middle"
                    });
                });
            }

            console.log(this.scrollInstanceArr);
        }
    }
</script>

<style lang="scss">
    @import "~styles/main.scss";

    .article {
        
        &__header {
            background-color: $main-color;
        }

        &__banner {
            display: block;
            margin: 0 auto;
            max-width: 120rem;
            padding: 4rem 4rem;
        }

        &__wrapper {
            background-color: lighten($main-color, 20%);
        }

        &__content {
            position: relative;
            max-width: 168rem;
            margin: 0 auto;
            padding: 4rem;

            &--right {
                position: absolute;
                top: 4rem;
                left: 4rem;
                max-width: 30rem;
            }

            &--left {
                max-width: 128rem;
                padding-left: 38rem;
                padding-right: 4rem;
            }
        }


        // Elements
        &__title {
            margin-bottom: 7rem;
        }

        &__section {
            position: relative;
            display: inline-block;
            vertical-align: top;
            padding-top: 1rem;
            padding-bottom: 1rem;

            &:before,
            &:after {
                content: '';
                position: absolute;
                width: 14rem;
                height: 8rem;
                background-image: url($svgs_path + 'guillemets.svg');
                background-size: contain;
            }

            &::before {
                top: -2rem;
                left: -2rem;
            }

            &:after {
                bottom: 0;
                right: 0;
            }

            &__title {
                text-transform: uppercase;
            }
            &__published {
                margin: 0; 
            }

            &__list {
                li {
                    opacity: 0;
                    transform: translateY(10rem);
                    margin-bottom: 10rem;
                    transition: opacity 1s $easeCustom, transform .6s $easeCustom;

                    &:last-child {
                        margin-bottom: 0;
                    }

                    &.is-scroll-active {
                        opacity: 1;
                        transform: translateY(0);
                        transition: opacity 1s $easeCustom, transform .6s $easeCustom;
                    }
                }
            }
        }
    } 
</style>

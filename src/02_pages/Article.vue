<template>
    <article v-if="story" class="article">
        <header class="article__header">
            <div class="article__banner">
                <router-link :to="{name: 'home'}">
                    <img :src="banner" alt="Bannière de John">
                </router-link>
                    <img :class="[isPoped ? 'isPoped' : '', 'article__banner__pop']" :src="bannerPop" alt="Bannière pop">
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
            </div>
            <article-profile></article-profile>
            <transition name="transition-timeline">
                <timeline v-if="story" :story="story"></timeline>
            </transition>
        </div>
    </article>
</template>

<script>
    import banner from '../../static/assets/svg/banner.svg'
    import bannerPop from '../../static/assets/svg/banner-pop.svg'

    import ArticleProfile from '@/00_components/ArticleProfile.vue';
    import Timeline from '@/00_components/Timeline.vue';
    import ScrollActive from '@/assets/js/classes/ScrollActive.js';

    /* Import Action STORE*/
    import { mapActions, mapGetters } from 'vuex';

    export default {
        data () {
            return {
                isPoped: false,
                banner: banner,
                bannerPop: bannerPop
            }
        },
        components: {
            ArticleProfile,
            Timeline
        },
        methods: {
            initScrollClasses: () => {
                // Active Class
                const $appearEl = document.querySelectorAll('.js-scroll-active');

                if ($appearEl) {
                    [].forEach.call($appearEl, (item, i) => {
                        new ScrollActive(item, {
                            screenOffset: "bottom", // or "middle"
                        });
                    });
                }
            }
        },
        computed: {
            ...mapGetters(['getStoryBySlug']),
            story: function () {
                return this.getStoryBySlug(this.$route.params.storySlug);
            }
        },
        updated() {
            this.initScrollClasses();
        },
        mounted() {
            setTimeout(() => {
                this.isPoped = true;
            }, 1200);
            this.initScrollClasses();
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
            position: relative;
            display: block;
            margin: 0 auto;
            max-width: 120rem;
            padding: 4rem 4rem;

            &__pop {
                position: absolute;
                bottom: 3rem;
                right: 0;
                width: 20.6rem;
                height: 15rem;
                transform: scale(0);

                &.isPoped {
                    transform: scale(1);
                    transition: transform .4s $easeOutBack;
                }
            }
        }

        &__wrapper {
            position: relative;
            background-color: #fdf0d1;
        }

        &__content {
            position: relative;
            max-width: 100%;
            margin: 0 auto;
            padding: 4rem 0 14rem;

            &--left {
                max-width: 124rem;
                padding-left: 34rem;
                padding-right: 4rem;

                @include mq($from:'xlarge') {
                    max-width: 86rem;
                    padding: 0;
                    margin: 0 auto;
                }
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
                    transform: translateY(7rem);
                    margin-bottom: 7rem;
                    transition: opacity 1s $easeCustom, transform .6s $easeCustom;

                    &:first-child {
                        opacity: 1;
                        transform: translateY(0);
                    }

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

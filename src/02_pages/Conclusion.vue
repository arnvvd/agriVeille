<template>
    <article class="article">
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
                    <h1 class="article__title heading--1" >Conclusion</h1>
                    <ul class="article__section__list">
                        <li class="js-scroll-active" >
                            <section class="article__section">
                                <h2 class="article__section__title heading--2">Well, well, well ...</h2>
                                <p class="article__section__published teasing--3">Published in Prison by John</p>
                                <p class="article__section__content teasing--1">Y’all’ll never guess what bloody happened to me: the bailiff showed up in me farm and took everything! Well, i did accumulate a slight sum: 320,650 euros! Yeah, who would have thought that going digital for me farm will cost me so much. If you want to do this you have to make strategic choices if you don’t want the technology to put you in more crap that it should pull you from. For example when i think about the drone, well it didn’t help me to save more money than i actually spent to map the crops… And actually i should say that there is a point where it started to be a hell of a job taking care of every fricking machine, won’t talk to you about me headaches! I was looking more after me phone than me beasts actually. 
Plus there’s the eventual breakdowns, technical issues and understanding who everything works. 
Even though i sound pissed because i just lost everything i had, i have to say that If i was able to control meself and not buy everthing i saw it would have a been a bloody good help this technology. Just to interview people, if you tell them that they won’t have to clean up shit, it’s a very good argument. 
And also, if i bought so many things it’s because i wanted to support french startups in the agro tech buisness which is thriving. 
Funny thing that people thing that farms and even farmers don’t know anything about connected objects with everything that’s coming up for us lately. Maybe that’s because of me accent or me look, uh? ;)

</p>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    import banner from '../../static/assets/svg/endtop.svg'

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
        height: 100vh;
        background-color: rgba(248, 203, 93, 0.3);
        &__header {
            background-color: $main-color;
        }

        &__banner {
            position: relative;
            display: block;
            margin: 0 auto;
            max-width: 70rem;
            padding: 3rem 4rem;
            padding-bottom: 0;
            transform: translateY(7px) !important;

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
        }

        &__content {
            position: relative;
            max-width: 100%;
            margin: 0 auto;
            padding: 7rem 0 14rem;

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

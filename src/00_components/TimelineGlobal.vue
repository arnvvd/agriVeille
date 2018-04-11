<template>
    <div class="timeline__global">
        <div class="timeline__global__wrapper">
            <ul class="timeline__global__wrapper__section">
                <li class="timeline__global__wrapper__section__item" v-for="(category, index) in this.timelineStory" :key="index">
                    <div class="timeline__global__wrapper__section__item__category">{{category.title}}</div>
                    <ul class="timeline__global__wrapper__section__item__dates">
                        <li v-bind:class="['timeline__sections__indicator']" v-for="(item, index) in category.itemArr" :key="index" v-bind:style="{ left: item.left + '%' }">
                            <a :href="item.source.link" target="_blank" v-on:mouseenter="addClassActive(index)"  v-on:mouseleave="removeClassActive(index)">&nbsp;</a>
                            <p class="timeline__sections__source">{{item.date}} - {{item.source.title}}</p>
                        </li>
                    </ul>
                </li>
                <li class="timeline__global__wrapper__section__ref">
                    <p class="timeline__global__wrapper__section__ref__start">Sep.</p>
                    <p class="timeline__global__wrapper__section__ref__section"></p>
                    <p class="timeline__global__wrapper__section__ref__end">Avr.</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        data() {
            return {
                startTop: 0,
                startDiffCategory: 0,
                startDate: moment('01/09/2017','DD/MM/YYYY'),
                totalDays: 212, // 1st September 2017 to 1st April 2017
                timelineStory: []
            }
        },
        props: ['stories'],
        methods: {
             addClassActive(index) {
                this.$el.querySelectorAll('.timeline__sections__indicator')[index].classList.add('is-active');
            },
            removeClassActive(index) {
                this.$el.querySelectorAll('.timeline__sections__indicator')[index].classList.remove('is-active');
            },
            calcSectionsPosition(){
                this.stories.map(category => { // add a top position for each category

                    const story = {};
                    story.itemArr = [];
                    story.title = category.title;

                    category.data.map(item => { // add a left position for each story
                        const itemDate = moment(item.date,'DD/MM/YYYY');
                        const diffDate = itemDate.diff(this.startDate, 'days');
                        const factor = Math.pow(10, 1); // Décimal
                        const position = Math.round(((diffDate / this.totalDays) * 100) * factor) / factor;
                        item.left = position;
                        story.itemArr.push(item);
                    });

                    this.timelineStory.push(story)
                });
            }
        },
        mounted() {
            this.calcSectionsPosition();
        },
        watch: {
            stories : function(val) {
                this.calcSectionsPosition();
            }
        }
    }
</script>

<style lang="scss">
    @import "~styles/main.scss";

    .timeline__global {
        &__wrapper {
            &__section {

                &__item {
                    margin-bottom: 3rem;
                    &__category {
                        padding-left: 1.5rem;
                    }
                    &__dates {
                        width: calc(100% - 25rem);
                        left: 25rem;
                        position: relative;
                        
                        .timeline__sections__source {
                            bottom: 0;
                            width: 100%;
                            padding: 3rem;
                            text-align: center;
                            background-color: $white;
                        }
                    }
                }

                &__ref {
                    position: relative;
                    height: 30px;
                    left: 25rem;
                    width: calc(100% - 25rem);
                    &__start {
                        position: absolute;
                        left: 0;
                        top: 0;
                        margin: 0;
                        transform: translateY(-50%)
                    }
                    &__section {
                        width: calc(100% - 8rem);
                        height: 2px;
                        margin: 0 auto;
                        background: black;
                    }
                    &__end {
                        position: absolute;
                        right: 0;
                        top: 0;
                        margin: 0;
                        transform: translateY(-50%)
                    }
                }
            }
        }
    }

    .timeline {
        &__sections {
            position: relative;
            width: 100%;
            height: 2px;
            background-color: $black;

            &__indicator {
                position: absolute;
                top: -.4rem;
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                background-color: $main-color;
                border: 2px solid $black;
                transition: background-color .4s $easeCustom;

                &:hover {
                    cursor: pointer;
                    background-color: darken($main-color, 50%);
                    transition: background-color .4s $easeCustom;
                }

                a {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }

            &__source {
                position: fixed;
                bottom: 1rem;
                left: 50%;
                margin: 0;
                opacity: 0;
                transform: translate(-50%, 1rem);
                pointer-events: none;
                transition: all .6s $easeCustom;

                .is-active & {
                    opacity: 1;
                    transform: translate(-50%, 0);
                    transition: all .6s $easeCustom;
                }
            }
        }
    }
</style>

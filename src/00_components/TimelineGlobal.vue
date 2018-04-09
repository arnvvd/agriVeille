<template>
    <div class="timeline__global">
        <div class="timeline__global__wrapper">
            <ul class="timeline__global__wrapper__section">
                <li class="timeline__global__wrapper__section__item" v-for="(category, index) in this.timelineStory" :key="index">
                    <div class="timeline__global__wrapper__section__item__category">{{category.title}}</div>
                    <ul class="timeline__global__wrapper__section__item__dates">
                        <li class="timeline__global__wrapper__section__item__dates__date" v-for="(item, key) in category.itemArr" :key="key" v-bind:style="{left: item.left + '%'}">
                            <!--{{item.date}}-->
                        </li>
                    </ul>
                </li>
                <li class="timeline__global__wrapper__section__ref">
                    <p class="timeline__global__wrapper__section__ref__start">Nov.</p>
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
                    margin-bottom: 20px;
                    &__category {
                    }
                    &__dates {
                        width: 75%;
                        left: 25%;
                        position: relative;
                        &__date {
                            position: absolute;
                            top: -1.5rem;
                            width: 1rem;
                            height: 1rem;
                            border-radius: 50%;
                            background-color: $black;
                            &:hover {
                                cursor: pointer;
                                background-color: $main-color;
                            }
                        }
                    }
                }
                &__ref {
                    position: relative;
                    height: 30px;
                    left: 25%;
                    width: 75%;
                    &__start {
                        position: absolute;
                        left: -2.5em;
                        top: -.7em;
                    }
                    &__section {
                        position: absolute;
                        width: 100%;
                        height: 2px;
                        background: black;
                    }
                    &__end {
                        position: absolute;
                        right: -2.2em;
                        top: -.7em;
                    }
                }
            }
        }
    }
</style>

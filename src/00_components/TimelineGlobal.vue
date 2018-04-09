<template>
    <div class="timeline__global">
        <div class="timeline__global__wrapper">
            <ul class="timeline__global__section">
                <li class="timeline__global_section__item" v-for="(category, index) in this.timelineStory" :key="index">
                    <div class="timeline__global__category">{{category.title}}</div>
                    <ul>
                        <li v-for="(item, key) in category.itemArr" :key="key">
                            {{item.left}}
                        </li>
                    </ul>
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
                // console.log(this.stories);
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

<style>

</style>

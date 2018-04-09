<template>
    <div class="timeline">
        <div class="timeline__wrapper">
            <p class="timeline__start">Nov.</p>
            <ul class="timeline__sections">
                <li class="timeline__sections__indicator"  v-for="(item, index) in this.sectionComputed" :key="index" v-bind:style="{ left: item.position + '%' }">
                    <p class="timeline__sections__source">{{item.date}} - {{item.source.title}}</p>
                </li>
            </ul>
            <p class="timeline__end">Avr.</p>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        data() {
            return {
                startDate: moment('01/09/2017','DD/MM/YYYY'),
                totalDays: 212, // 1st September 2017 to 1st April 2017
                sectionComputed: []
            }
        },
        props: ['story'],
        methods: {
            calcSectionsPosition(){
                this.story.data.map(item => {
                    const itemDate = moment(item.date,'DD/MM/YYYY');
                    const diffDate = itemDate.diff(this.startDate, 'days');
                    const factor = Math.pow(10, 1); // Décimal
                    const position = Math.round(((diffDate / this.totalDays) * 100) * factor) / factor;
                    item.position = position;
                    this.sectionComputed.push(item);
                });
            }
        },
        mounted() {
            this.calcSectionsPosition();
        }
    }
</script>

<style lang="scss">
    @import "~styles/main.scss";

    .timeline {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 4rem 0;
        background-color: $white;

        &__wrapper {
            position: relative;
            display: block;
            margin: 0 auto;
            width: 100%;
            max-width: 96rem;
            padding: 0 4rem;
        }

        &__start {
            position: absolute;
            left: 0;
            bottom: 50%;
            transform: translateY(50%);
            margin: 0;
        }

        &__end {
            position: absolute;
            right: 0;
            bottom: 50%;
            transform: translateY(50%);
            margin: 0;
        }

        &__sections {
            position: relative;
            width: 100%;
            height: 2px;
            background-color: $black;

            &__indicator {
                position: absolute;
                top: -.7rem;
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                background-color: $black;

                &:hover {
                    cursor: pointer;
                    background-color: $main-color;
                }
            }

            &__source {
                position: fixed;
                bottom: 1rem;
                left: 50%;
                margin: 0;
                transform: translateX(-50%);
            }
        }
    }


</style>

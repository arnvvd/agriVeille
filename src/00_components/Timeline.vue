<template>
    <div class="timeline">
        <div class="timeline__wrapper">
            <p class="timeline__start">Nov.</p>
            <ul class="timeline__sections">
                <li v-bind:class="['timeline__sections__indicator']" v-for="(item, index) in this.sectionComputed" :key="index" v-bind:style="{ left: item.position + '%' }">
                    <a :href="item.source.link" target="_blank" v-on:mouseenter="addClassActive(index)"  v-on:mouseleave="removeClassActive(index)">&nbsp;</a>
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
                sectionComputed: [],
                isActive: false
            }
        },
        props: ['story'],
        methods: {
            addClassActive(index) {
                this.$el.querySelectorAll('.timeline__sections__indicator')[index].classList.add('is-active');
            },
            removeClassActive(index) {
                this.$el.querySelectorAll('.timeline__sections__indicator')[index].classList.remove('is-active');
            },
            calcSectionsPosition() {
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
        padding: 5rem 0 6rem;
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

                &.is-active {
                    background-color: $main-color;
                    transition: background-color .4s $easeCustom;
                }

                &:hover {
                    cursor: pointer;
                    background-color: $main-color;
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

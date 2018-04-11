<template>
    <div class="references">
        <div class="references__wrapper">
            <div class="references__wrapper__category" v-for="(item, index) in this.stories" :key="index">
                <p class="references__wrapper__category__title heading--5">{{item.title}}</p>
                <ul class="references__wrapper__category__sources">
                    <li class="references__wrapper__category__sources__item" v-for="(reference, index) in item.data" :key="index">
                        <a v-bind:href="reference.source.mediaLink" target="_blank">{{reference.source.media}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['stories']
    }
</script>

<style lang="scss">
    @import "~styles/main.scss";

    .references {
        margin-top: 60px;
        &__wrapper {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;

            @include mq($from: 'tablet') {
                flex-direction: row;
            }

            &__category {
                width: 100%;
                padding: 0 1.5rem;
                margin-bottom: 3rem;

                @include mq($from: 'tablet') {
                    width: 50%;
                }

                @include mq($from: 'desktop') {
                    width: 33.33%;
                }

                &__title {
                    text-transform: uppercase;
                    position: relative;
                    display: inline;

                    &:before, &:after {
                        content: '';
                        position: absolute;
                        width: 3rem;
                        height: 2rem;
                        background-image: url(/static/assets/svg/guillemets.svg);
                    }

                    &:before {
                        top: -.5em;
                        left: -.5em;
                    }

                    &:after {
                        top: 0.3em;
                        right: -.5em;
                    }
                }
                &__sources {
                    margin-top: 2rem;
                    &__item {
                        display: flex;
                        flex-direction: row;
                        margin-bottom: 1rem;
                        &:before {
                            content: '.';
                            position: relative;
                            left: -.5rem;
                            padding-right: 5px;
                        }
                    }
                }
            }
        }
    }
</style>

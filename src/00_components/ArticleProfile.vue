<template>
    <aside class="article__profile">
        <h2 class="article__profile__title heading--3">About me</h2>
        <div class="article__profile__header">
            <img v-if="image" :src="image" alt="Loader example">
        </div>
        <p class="article__profile__desc teasing--2">
            I'm John, 52, from Ireland and I'm a connected farmer in Beauce. Discover how I digitized my farm.
        </p>

    </aside>
</template>

<script>

import getHead from '@/assets/js/utils/gaugeImage.js';
import Sticky from '@/assets/js/classes/Sticky.js';

/* Import Action STORE*/
import { mapActions, mapGetters } from 'vuex';

export default {
    data () {
        return {
            image: "",
        }
    },
    computed: {
        ...mapGetters([
            'getDigitalValue',
            'getCurrentStory'
        ])
    },
    mounted() {
        this.image = getHead(this.getDigitalValue);
        if (this.pdf = getPDF(this.getCurrentStory.id)) {
            this.pdf = getPDF(this.getCurrentStory.id)
        }
        const $el = this.$el;
        const $parent = this.$el.parentNode;
        new Sticky($parent, {
            $element : $el,
            stickedClass : 'is-sticked',
            positionnedClass : 'is-positionned',
            marginTop: 0,
            marginBottom: 40
        });
    },
    watch: {
        getCurrentStory(val) {
            this.pdf = getPDF(this.getCurrentStory.id)
        }
    }
}
</script>

<style lang="scss">
    @import "~styles/main.scss";

    .article {

        &__profile {
            position: absolute;
            top: 4rem;
            left: 4rem;
            max-width: 23rem;

            @include mq($from:'xlarge') {
                left: calc(50% - 43rem);
                max-width: 30rem;
                padding-right: 7rem;
                transform: translateX(-100%);
            }

            &.is-sticked {
                position: fixed;
            }

            &__header {
                position: relative;
                width: 100%;
                height: 23rem;
                margin: 1rem 0;
                background-color: $main-color;
                overflow: hidden;

                &:before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 35rem;
                    height: 25rem;
                    border-radius: 50%;
                    background-color: #89A164;
                    transform: translate(-50%, 0);
                }

                img {
                    position: absolute;
                    bottom: 50%;
                    width: 25rem;
                    left: 50%;
                    max-width: 25rem;
                    transform: translate(-50%, 50%);
                }
            }

            &__title,
            &__desc {
                margin: 0;
            }
        }
    }
</style>

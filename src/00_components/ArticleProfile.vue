<template>
    <aside class="article__profile">
        <h2 class="article__profile__title heading--3">About me</h2>
        <div class="article__profile__header">
            
        </div>
        <p class="article__profile__desc teasing--2">
            Moi c’est John, 52 ans, originaire d’Irlande et agriculteur éleveur en Beauce. Découvre comment j’ai digitalisé ma ferme vindieu.
        </p>
    </aside>
</template>

<script>
import loaderImage from '../../static/assets/images/loader.png'

import Sticky from '@/assets/js/classes/Sticky.js';

export default {
    data () {
        return {
            loaderImage: loaderImage
        }
    },
    mounted() {
        const $el = this.$el;
        console.log($el);
        const $parent = this.$el.parentNode.parentNode;
        new Sticky($parent, {
            $element : $el,
            stickedClass : 'is-sticked',
            positionnedClass : 'is-positionned',
            marginTop: 0,
            marginBottom: 40
        });
    }
}
</script>

<style lang="scss">
    @import "~styles/main.scss"; 
    
    .article { 

        &__profile {

            &.is-sticked {
                position: fixed;
                top: 4rem;
                left: 4rem;
                max-width: 30rem;
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
            }

            &__title,
            &__desc {
                margin: 0;
            }
        }
    }
</style>

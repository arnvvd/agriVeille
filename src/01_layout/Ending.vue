<template>
    <div class="ending">
        <div class="centered">
            <div class="ending__wrapper">
                <img class="ending__top" :src="topImage" alt="John triste">
                <div class="ending__content">
                    <div class="ending__content__inner">
                        <h2 class="ending__title heading--4">M'voilà plumé&nbsp;!</h2>
                        <p class="teasing--4">« Vous devinerez pas ce qui vient de m’arriver, c’est l’huissier qu’a débarqué et qui m’a tout pris&nbsp;! J’avais accumulé 320 650 euros de dette faut dire !</p>
                        <p class="teasing--4">Eh oui, digitaliser sa ferme, c’est pas donné et t’as intérêt à faire des choix stratégiques si tu veux pas qu’la technologie te mette plus dans le fumier qu’elle ne t’en sorte&nbsp;!&nbsp;»</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import endTop from '../../static/assets/svg/endtop.svg'

export default {
    data () {
        return {
            topImage: endTop
        }
    }
}
</script>



<style lang="scss">
     @import "~styles/main.scss";

    .ending {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba($main-color, .8);
        z-index: 99;

        &__wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        &__content {
            position: relative;
            max-width: 70rem;
            background-color: #A5A39F;
            padding: 2.5rem;
            border: 3px solid $black;
            border-radius: .5rem;

            &:before,
            &:after {
                content: '';
                position: absolute;
                width: 7rem;
                height: 10rem;
                background-size: contain;
            }

            &::before {
                top: 5rem;
                left: -3rem;
                background-image: url($svgs_path + 'endleft.svg');
            }

            &:after {
                top: 5rem;
                right: -3rem;
                background-image: url($svgs_path + 'endright.svg');
            }

            &__inner {
                padding: 4rem;
                background-color: $main-color;
                border: 3px solid $black;
                border-radius: .5rem;
            }
        } 

        &__top {
            padding: 0 4rem;
            max-width: 70rem;
            transform: translateY(1rem);
        }
    }
</style>

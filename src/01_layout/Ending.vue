<template>
    <div class="ending">
        <div class="centered">
            <div class="ending__wrapper">
                <img class="ending__top" :src="topImage" alt="John triste">
                <div class="ending__content">
                    <div class="ending__content__inner">
                        <h2 class="ending__title heading--4">I'm penniless&nbsp;!</h2>
                        <p class="teasing--4">«&nbsp;Y’all’ll never guess what bloody happened to me: the bailiff showed up in me farm and took everything! Well, i did accumulate a slight sum: <b>320,650 euros</b>&nbsp;!</p>
                        <p class="teasing--4">Yeah, who would have thought that going digital for me farm will cost me so much. If you want to do this you have to make strategic choices if you don’t want the technology to put you in more crap that it should pull you from&nbsp;»</p>
                        <router-link class="btn btn--onboarding btn--primary heading--3":to="{name: 'conclusion'}">
                            Read the ending
                         </router-link>
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

      .btn--onboarding {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        border: 3px solid $black;
        background-color: $white;
        transform: translate(-50%, 50%);
    }
</style>

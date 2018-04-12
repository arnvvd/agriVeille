<template>
    <div class="onboarding">
        <div class="centered">
            <div class="onboarding__wrapper">
                <div class="onboarding__content">
                    <div class="onboarding__content__inner">
                        <h2 class="onboarding__title heading--4">Hello y'all&nbsp;!</h2>
                        <p class="teasing--4">I'm John, 52, coming from Ireland. It's been 3 years since I settled in France to become a breeder farmer near Beauvais. A few months ago, my friends and relatives convinced me to digitalize me farm. What a great upheaval! That's how I decided to create this blog, for you to understand what happened to me. But enough chit-chat, let's get down to business!</p>
                        <p class="teasing--4"><b>Close this pop-up, scroll up/down to fill the digitalization gauge and click on the elements popping on the screen to access my logbook.</b></p>
                        <button class="btn btn--onboarding btn--primary heading--3" v-on:click="setOnboarded">Let's go&nbsp;!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* Import Action STORE*/
import { mapActions } from 'vuex';

export default {
   methods: {
        ...mapActions(['setOnboarded'])
    }
}
</script>



<style lang="scss">
     @import "~styles/main.scss";

    .onboarding {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(#f8cb5d, .8);
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

            &__inner {
                padding: 4rem;
                background-color: $main-color;
                border: 3px solid $black;
                border-radius: .5rem;
            }
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

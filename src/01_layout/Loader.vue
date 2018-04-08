<template>
    <div class="loader">
        <div class="loader__wrapper">
            <img :src="image" alt="Loader example">
            <p class="loader__blink">Loading</p>
        </div>
    </div>
</template>

<script>
import loaderImage from '../../static/assets/images/loader.gif'

export default {
    data () {
        return {
            image: loaderImage
        }
    }
}
</script>


<style lang="scss">
    @import "~styles/main.scss";

    .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: $main-color;
        overflow: hidden;
        z-index: 100;

        &__wrapper {
            display: inline-block;
            position: absolute;
            top: 50vh;
            left: 50vw;
            transform: translate(-50%, -50%);
        } 

        &__blink {
            text-align: center;
            animation: blink .8s $easeInOutCubic infinite;
        }

        img {
            display: block;
            left: 50%;
            width: 20rem;
        }


        @keyframes blink {
            0% {
                opacity: 1
            }
            50% {
                opacity: 0
            }
            100% {
                opacity: 1
            }
        }
    }
</style>
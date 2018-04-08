<template>
    <div class="onboarding">
        <div class="centered">
            <div class="onboarding__wrapper">
                <div class="onboarding__content">
                    <div class="onboarding__content__inner">
                        <h2 class="onboarding__title heading--4">Bien l'bonjour à toi, visiteur de l’internet&nbsp;!</h2>
                        <p class="teasing--4">Moi c’est John, 52 ans, originaire d’Irlande. V’là 3 ans que j’ai quitté ma bourgade natale pour v'nir m’installer en France près de Beauvais et devenir agriculteur éleveur. Y a quelques mois de ça, plusieurs de mes connaissances et amis m’ont convaincu de digitaliser ma ferme. Un sacré chamboulement&nbsp;! C’est donc pour raconter mon expérience que j’ai créé ce p'tit blog qui te montrera en détails comment tout ça s’est goupillé.</p>
                        <p class="teasing--4">Mais assez perdu d'temps&nbsp;! <b>Ferme ce pop-up, scrolle pour remplir la jauge de digitalisation et clique sur les éléments</b> qui apparaissent à l’écran pour accéder à mon journal de bord.</p>
                        <button class="btn btn--onboarding btn--primary heading--3" v-on:click="setOnboarded">Commencer&nbsp;!</button>
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
        background-color: rgba(#FFF, .6);
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

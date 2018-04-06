<template>
    <div class="onboarding">
        <div class="centered">
            <div class="onboarding__wrapper">
                <div class="onboarding__content">
                    <h2 class="onboarding__title">Bien l'bonjour à toi, visiteur de l’internet&nbsp;!</h2>
                    <p> Moi c’est John, 52 ans, originaire d’Irlande. V’là 3 ans que j’ai quitté ma bourgade natale pour v'nir m’installer en France près de Beauvais et devenir agriculteur éleveur. Y a quelques mois de ça, plusieurs de mes connaissances et amis m’ont convaincu de digitaliser ma ferme. Un sacré chamboulement&nbsp;! C’est donc pour raconter mon expérience que j’ai créé ce p'tit blog qui te montrera en détails comment tout ça s’est goupillé.</p>
                    <p>Mais assez perdu d'temps&nbsp;! Ferme ce pop-up, scrolle pour remplir la jauge de digitalisation et clique sur les éléments qui apparaissent à l’écran pour accéder à mon journal de bord.</p>
                    <button class="btn btn--onboarding btn--primary" v-on:click="setOnboarded">Commencer&nbsp;!</button>
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
        background-color: rgba(#F1C08F, .8);
        z-index: 99;

        &__wrapper {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        &__content {
            position: relative;
            max-width: 70rem;
            background-color: $white;
            padding: 4rem;
            border-radius: .5rem
        } 
    } 

    .btn--onboarding {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
    }
</style>

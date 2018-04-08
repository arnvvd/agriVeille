<template>
    <div class="ending">
        <div class="centered">
            <div class="ending__wrapper">
                <div class="ending__content">
                    <h2 class="ending__title">M'voilà plumé&nbsp;!</h2>
                    <p>Vous devinerez pas ce qui vient de m’arriver, c’est l’huissier qu’a débarqué et qui m’a tout pris ! Bon faut dire que j’avais accumulé une légère somme non payée : 320 650 euros ! Eh oui, digitaliser sa ferme, c’est pas donné et t’as intérêt à faire des choix stratégiques si tu veux pas qu’la technologie te mette plus dans le fumier qu’elle ne t’en sorte ! Par exemple, quand je repense au drone, bah ça m’a pas permis d’économiser pu d’argent que je n’en ai dépensé pour cartographier les champs, hein... </p>
                    <p>Et pis, j’dois dire qu’au bout d’un moment c’était une sacrée fatigue psychologique de s’occuper de tous ces machins connectés, et qu’ça me prenait plus la tête à regarder mon portable en permanence qu’ça m’aidait. Sans compter les pannes et incidents techniques qu’ont pu arriver sans prévenir ! Bon après, j’ai l’air très remonté mais c’est parce que je vins de tout perdre mais je dois dire que si j’avais été pu raisonnable ça m’aurait été d’une sacrée aide toute cette technologie. Déjà comme argument pour recruter des gars qui veulent pas faire le sale boulot de nettoyage des bâtiments d’élevage par exemple.</p>
                    <p>Et pis aussi, si j’ai acheté autant de machins, c’est pace-que j’ai voulu soutenir les starts-ups françaises, pionnières dans le domaine de l’agrotech ! C’est d’ailleurs marrant qu’les gens pensent que l’agriculture, c’est pas un domaine connecté vu tout ce qui existe depuis longtemps et qui est en train de se lancer en ce moment hein ! Rapport à mon accent peut-être ? ;)</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>



<style lang="scss">
     @import "~styles/main.scss";

    .ending {
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
</style>

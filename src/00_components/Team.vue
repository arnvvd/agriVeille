<template>
    <div class="references">
        <div class="references__wrapper">
            <h2 class="references__title heading--1">Team</h2>
            <img :src="team" alt="Team">
        </div>
    </div>
</template>

<script>
    import team from '../../static/assets/images/team.png'
    export default {
        data () {
            return {
                team: team
            }
        }
    }
</script>

<style lang="scss">
    @import "~styles/main.scss";
</style>

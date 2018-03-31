<template>
  <main id="app">
    <navigation></navigation>
    <btn-increment></btn-increment>
    <transition name="transition-page">
        <router-view></router-view>
    </transition> 
  </main>
</template>


<script>
    /*Import Components*/
    import BtnIncrement from '@/00_components/BtnIncrement.vue';
    import Navigation from '@/01_layout/Navigation.vue';

    export default {
        components: {
            'btn-increment': BtnIncrement,
            'navigation': Navigation
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "~styles/main.scss";
</style>
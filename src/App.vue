<template>
  <main id="app">
    <navigation></navigation>
    <transition name="transition-page">
        <router-view></router-view>
    </transition> 
  </main>
</template>


<script>
    /*Import Components*/
    import Navigation from '@/01_layout/Navigation.vue';

    export default {
        components: {
            'navigation': Navigation
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "~styles/main.scss";
</style>
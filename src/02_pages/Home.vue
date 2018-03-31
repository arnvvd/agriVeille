<template>
    <div class="home">
        <h1>{{title}}</h1>
        <home-canvas></home-canvas>
    </div>
</template>

<script>
import Canvas from '@/00_components/Canvas.vue';

export default {
    data () {
        return {
          title: 'Hello Home'
        }
    },
    components: {
        'homeCanvas': Canvas
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .home {
        position: relative;
        padding: 4rem 0;
        min-height: 100vh;
        overflow: hidden;
    }
</style>

<template>
      <button class="btn btn--test" v-on:click="counterIncrement">Increment {{getCountIncrement}}</button>
</template>


<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'counterIncrement'
            ])
        },
        computed: {
            ...mapGetters([
                'getCountIncrement'
            ])
        }
    }
</script>

<style lang="scss">
    .btn {
        &--test {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }
    }
</style> 
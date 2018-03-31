<template>
    <div class="home">
        <h1>{{title}}</h1>
    </div>
</template>

<script>

export default {
    data () {
        return {
          title: 'Hello Home'
        }
    },
    mounted() {
        this.setListeners()
        this.setUpScene()
    },
    methods: {
        setUpScene() {
            this.pixiApp = new PIXI.Application({
              width: window.innerWidth,
              height: window.innerHeight,
              antialias: true,    
              transparent: true,
            })
            this.pixiApp.renderer.autoResize = true;
            document.body.appendChild(this.pixiApp.view);
        },

        onResize() {
          this.pixiApp.renderer.resize(window.innerWidth, window.innerHeight);
        },

        setListeners() {
          window.addEventListener('resize', this.onResize)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>

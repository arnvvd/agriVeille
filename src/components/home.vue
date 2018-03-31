<template>
    <main class="main">
        <p>Hello World</p>
    </main>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
          msg: 'veiiiillle'
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
<style lang="scss">

@import "~styles/main.scss";

canvas {
    width: 100%;
    height: 100%;
}
</style>

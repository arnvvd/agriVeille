class Pop {
    constructor(opt) {
        this.urls = opt.urls
        this.loader = PIXI.loader
        this.stage = opt.stage
        this.config = {
            "alpha": {
                "start": 0.74,
                "end": 0
            },
            "scale": {
                "start": 0.1,
                "end": 0.5
            },
            "speed": {
                "start": 200,
                "end": 50
            },
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "rotationSpeed": {
                "min": 0,
                "max": 200
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.7
            },
            "blendMode": "normal",
            "frequency": 0.001,
            "emitterLifetime": 0.2,
            "maxParticles": 20,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": true,
            "spawnType": "point"
        }

        for (let i = 0; i < this.urls.length; i++) {
            this.loader.add("img"+i, this.urls[i])
            
        }

        this.loader.load(()=> {
            this.initParticleEmitter()
        })
    }

    initParticleEmitter() {
        this.emitterContainer = new PIXI.Container()
        this.stage.addChild(this.emitterContainer)
        this.art = []
        for (let i = 0; i < this.urls.length; i++) {
            let texture = PIXI.Texture.fromImage(this.urls[i])
            this.art.push(texture) 
        }
        console.log(this.art)

        this.particlesEmitter = new PIXI.particles.Emitter(
            this.particlesEmitterContainer,
            this.art,
            this.config
        );

        this.particlesEmitter.updateOwnerPos(window.innerWidth / 2, window.innerHeight / 2);
        this.particlesEmitter.emit = false
        window.addEventListener('mouseup', (e)=>{

            if(!this.particlesEmitter) return;
            var bunny = PIXI.Sprite.fromImage('../../../../static/assets/images/tracteur.png')
            bunny.x = e.layerX;
            bunny.y = e.layerY;
            bunny.pivot.set(bunny.width/2,bunny.height/2)
            this.stage.addChild(bunny)
            console.log(e.offsetX, e.offsetY)
            this.particlesEmitter.resetPositionTracking();
            
         
            this.particlesEmitter.updateOwnerPos(e.offsetX || e.layerX, e.offsetY || e.layerY);
            this.particlesEmitter.emit = true;
        });
    }
}

export default Pop
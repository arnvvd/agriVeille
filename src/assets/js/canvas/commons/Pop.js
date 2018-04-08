import {TweenLite} from 'gsap'

class Pop {
    constructor(opt) {
        this.urls = opt.urls
        this.loader = PIXI.loader
        this.stage = opt.stage
        this.currentIllu = 0
        this.resources = opt.resources
        this.illus = []

        this.config = {
            "alpha": {
                "start": 0.74,
                "end": 0
            },
            "scale": {
                "start": 0.1,
                "end": 0.5
            },
            "color": {
                "start": "eb8b58",
                "end": "575757"
            },
            "speed": {
                "start": 220,
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
            "maxParticles": 40,
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

        window.addEventListener('click', this.addIllu.bind(this))
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

        this.particlesEmitter = new PIXI.particles.Emitter(
            this.emitterContainer,
            this.art,
            this.config
        );

        //this.particlesEmitter.updateOwnerPos(window.innerWidth / 2, window.innerHeight / 2);
        this.particlesEmitter.emit = false
    }

    addIllu(e) {
        let texture = this.resources["illu"+this.currentIllu].texture

        let positionScale = {
            x: ((window.innerWidth/(1046*this.stage.scale.x))*this.stage.scale.x),
            y:((window.innerHeight/(675*this.stage.scale.x))*this.stage.scale.x)
        }

        if(!this.particlesEmitter) return;
        let illu = new PIXI.Sprite(texture)
     

        illu.x = e.layerX/positionScale.x;
        illu.y = e.layerY/positionScale.y;
        
        illu.pivot.set(illu.width/2,illu.height/2)   
        illu.width = (illu.width/3)
        illu.height = (illu.height/3)
        illu.interactive = true 
        this.stage.addChild(illu)
        TweenLite.from(illu, 0.3, { ease: Back.easeOut.config(1.7), width: 0, height: 0 });
        TweenLite.from(illu, .25, { alpha: 0 });

        this.particlesEmitter.emit = true;
        this.particlesEmitter.resetPositionTracking();     
        this.particlesEmitter.updateOwnerPos(e.offsetX/positionScale.x || e.layerX/positionScale.x, e.offsetY/positionScale.y || e.layerY/positionScale.y);
    

        this.illus.push(illu)
        if(this.currentIllu < this.resources.length-1) {
            this.currentIllu ++
        }
    }
}

export default Pop
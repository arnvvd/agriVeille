import {TweenLite} from 'gsap'
import Emitter from '@/core/eventemitter.js'; 
import {
    CANVAS_CLICK
} from '@/core/messages.js';


class Pop {
    constructor(opt) {
        this.urls = opt.urls
        this.loader = PIXI.loader
        this.stage = opt.stage
        this.currentIllu = 0
        this.resources = opt.resources
        this.illus = []
        this.stories = opt.stories

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
            "emitterLifetime": .100,
            "maxParticles": 100,
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

        this.particlesEmitter = new PIXI.particles.Emitter(
            this.emitterContainer,
            this.art,
            this.config
        );

        //this.particlesEmitter.updateOwnerPos(window.innerWidth / 2, window.innerHeight / 2);
        this.particlesEmitter.emit = false
    }

   
    removeIllu(id) {
        console.log(this.stage)
        for(let i = 0; i < this.stories[id-1].length; i++) {
            setTimeout(()=> {
                this.particlesEmitter.emit = true;
                this.particlesEmitter.resetPositionTracking();     
                this.particlesEmitter.updateOwnerPos(this.stage.children[(this.stage.children.length-1)-i].x, this.stage.children[(this.stage.children.length-1)-i].y);
            }, i*80)

            TweenLite.to(this.stage.children[(this.stage.children.length-1)-i], 0.3, {width: 0, height: 0, ease:Back.easeIn.config(1.7), onCompleteScope: this, onComplete:function(){
                if(i == this.stories[id-1].length -1) {
                    this.stage.removeChildren(this.stage.children.length - this.stories[id-1].length, this.stage.children.length)
                    console.log(this.stage)
                }   
            }})
        }
    }

    addIllu(id, slug) {
        if(!this.particlesEmitter) return;
        for(let i = 0; i < this.stories[id-1].length; i++) {
            console.log(this.stories)
            this.particlesEmitter.emitterLifetime = 0.200*this.stories[id-1].length

            let pos = {
                x : Math.random()*window.innerWidth,
                y: Math.random()*window.innerHeight
            }
    
            let positionScale = {
                x: ((window.innerWidth/(1550*this.stage.scale.x))*this.stage.scale.x),
                y:((window.innerHeight/(1001*this.stage.scale.x))*this.stage.scale.x)
            }
    
         
            
            setTimeout(()=> {
                this.particlesEmitter.emit = true;
                this.particlesEmitter.resetPositionTracking();     
                this.particlesEmitter.updateOwnerPos(pos.x/positionScale.x || pos.x/positionScale.x, pos.y/positionScale.y || pos.y/positionScale.y);
            }, i*80)
       
            let texture = this.resources["illu"+(id-1)+i].texture
    
           
            let illu = new PIXI.Sprite(texture)
         
            illu.x = pos.x/positionScale.x;
            illu.y = pos.y/positionScale.y;
            
            illu.interactive = true;
            illu.hitArea = new PIXI.Rectangle(0, 0, illu.width, illu.height);
       
            illu.pivot.set(illu.width/2,illu.height/2)   
            illu.width = (illu.width/3)
            illu.height = (illu.height/3)
    
            illu.click = function (e) {
               Emitter.emit(CANVAS_CLICK, {slug: slug});                
            };
    
            this.stage.addChild(illu)
    
            TweenLite.from(illu, 0.3, { ease: Back.easeOut.config(1.7), width: 0, height: 0, delay: i/10, onCompleteScope: this, onComplete:function() {
                if(i == this.stories[id-1].length -1) {
                    // Emitter.emit()
                }
            } });
            TweenLite.from(illu, .25, { alpha: 0, delay: i/10 });
    
    
            this.illus.push(illu)
        }

       
    }
}

export default Pop
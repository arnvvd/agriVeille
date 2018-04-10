import Scene from './commons/Scene.js';
import Particle from './commons/Particle.js';
import Pop from './commons/Pop.js'
import Loader from './commons/Loader'
import interactiveParticle from './commons/interactiveParticle.js';

export default class Canvas {

    constructor( _container, opt ) {

        this.container = _container;
        this.currentStory = opt.currentStory
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.scene = new Scene( w, h );
        
        this.urls = [
            ['../../../static/assets/images/tracteur.png',
            '../../../static/assets/images/boss.jpg'
            ],
            ['../../../static/assets/images/loader.png',
            '../../../static/assets/images/head-2.png'],

        ]

        this.loader = new Loader()
        this.loader.addInLoader(this.urls).then( ()=> {
           this.loader.load()
        })

        this.loader.loader.onComplete.add(()=> {
           this.resources = this.loader.loader.resources
           this.pop = new Pop({urls:['../../../static/assets/images/CartoonSmoke.png'], stage: this.scene.stage, resources:this.resources, stories: this.urls, currentStory: this.currentStory})

        })

        // Default particle
        this.particle = new Particle();
        this.particle.position.x = this.scene.renderer.width/2;
        this.particle.position.y = this.scene.renderer.height/2;
        this.scene.addChild( this.particle );

        // Interactive particle
        this.interactiveParticle = new interactiveParticle({
            slug: "agriculture-connecte"
        });
        this.interactiveParticle.position.x = this.scene.renderer.width/3;
        this.interactiveParticle.position.y = this.scene.renderer.height/2;
        this.scene.addChild( this.interactiveParticle );
        
        this.lastId = this.currentStory
    }

    nikita(id, slug) {
        this.currentId = id
        if(this.currentId <= this.lastId) {
            this.pop.removeIllu(this.lastId)
            this.lastId --
        } else {
            this.pop.addIllu(id, slug); 
            this.lastId ++ 
        }
        
    }

    attachToContainer() {
        this.container.appendChild( this.scene.renderer.view );
    }


    update( DELTA_TIME ) {
        if (this.particle) {
            this.particle.update();
        }
        if(this.pop && this.pop.particlesEmitter) {

            this.pop.particlesEmitter.update(DELTA_TIME*0.001)
        }

    }


    render() {
        this.scene.render();
    }


    resize( _width, _height ) {
        this.scene.resize( _width, _height );
    }
}
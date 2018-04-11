import Scene from './commons/Scene.js';
import Pop from './commons/Pop.js'
import Loader from './commons/Loader'
import urls from '../utils/urls'
export default class Canvas {

    constructor( _container, opt ) {

        this.container = _container;
        this.currentStory = opt.currentStory
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.scene = new Scene( w, h );
        
        this.urls = urls

        this.loader = new Loader()
        this.loader.addInLoader(this.urls).then( ()=> {
           this.loader.load()
        })

        this.loader.loader.onComplete.add(()=> {
           this.resources = this.loader.loader.resources
           this.pop = new Pop({urls:['../../../static/assets/images/CartoonSmoke.png'], stage: this.scene.stage, resources:this.resources, stories: this.urls, currentStory: this.currentStory})

        })
        this.timeSpent = 0
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
        this.timeSpent += DELTA_TIME
        this.scene.stage.y = Math.sin(this.timeSpent/500.)*4.
    }


    render() {
        this.scene.render();
    }


    resize( _width, _height ) {
        this.scene.resize( _width, _height );
    }
}
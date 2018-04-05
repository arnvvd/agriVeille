import Scene from './commons/Scene.js';
import Particle from './commons/Particle.js';
import interactiveParticle from './commons/interactiveParticle.js';

export default class Canvas {

    constructor( _container ) {

        this.container = _container;

        const w = window.innerWidth;
        const h = window.innerHeight;
        this.scene = new Scene( w, h );

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

    }


    attachToContainer() {
        this.container.appendChild( this.scene.renderer.view );
    }


    update( DELTA_TIME ) {
        if (this.particle) {
            this.particle.update();
        }
    }


    render() {
        this.scene.render();
    }


    resize( _width, _height ) {
        this.scene.resize( _width, _height );
    }
}
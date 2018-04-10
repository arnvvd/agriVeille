import * as PIXI from 'pixi.js';
import particles from 'pixi-particles'

export default class Scene {

    constructor( _width, _height ) {

        this.width = _width;
        this.height = _height;
        
        this.children = [];
        this.sceneSize = {
            w: 1550,
            h:1001
        }
        this.scaleOffset = 1.

        this.stage = new PIXI.Container();

        this.bg = new PIXI.Sprite.fromImage('../../../../static/assets/images/scene2.png')
        this.stage.addChild(this.bg)
        this.renderer = new PIXI.WebGLRenderer( this.sceneSize.w*window.devicePixelRatio, this.sceneSize.h*window.devicePixelRatio, { transparent: true } );
        this.resize(window.innerWidth, window.innerHeight)
    }


    addChild( child ) {
        // has to be an instance of PIXI.DisplayObject PIXI.DisplayObject
        if ( child instanceof PIXI.DisplayObject === false ) {
            throw "child has to be an instance of PIXI.DisplayObject";
        }

        this.stage.addChild( child );
    }


    removeChild( child ) {
        // has to be a PIXI.DisplayObject or child of PIXI.DisplayObject
        this.stage.removeChild( child );
    }


    render() {
        this.renderer.render( this.stage );
    }


    resize( _width, _height ) {
        this.width = _width;
        this.height = _height;
        //console.log(this.width)

        // this.renderer.view.style.width = `${this.width}px`;
        // this.renderer.view.style.height = `${this.height}px`;
          // console.log(this.renderer)
        this.renderer.view.width = this.width
        this.renderer.view.height = this.height
        console.log(this.stage)
        //console.log(this.stage)
        if(window.devicePixelRatio == 2) {
            this.scaleOffset = 1.5
        } else {
            this.scaleOffset = 1.
        }

        if (this.height / this.sceneSize.h < this.width / this.sceneSize.w) {
            this.stage.scale.x = this.stage.scale.y =  (this.height/this.sceneSize.h)*this.scaleOffset;

            
            // this.stage.pivot.x = (this.sceneSize.w - this.width)/2
           //this.stage.pivot.y = -(this.sceneSize.h - (this.sceneSize.h*this.stage.scale.x))

        console.log('ok')
        } else {
           

            this.stage.scale.x = this.stage.scale.y = (this.width/this.sceneSize.w)*this.scaleOffset;
           // this.stage.pivot.y = -(this.sceneSize.h - this.height)/2
            //this.stage.position.set(window.innerWidth/2, window.innerHeight/2)
        }

        if(this.pop) {
            this.pop.setScale(this.stage.scale.x)
        }

        this.stage.y = ((this.height*window.devicePixelRatio - (this.sceneSize.h*this.stage.scale.x))/2.)
        this.stage.x = ((this.width*window.devicePixelRatio - (this.sceneSize.w*this.stage.scale.x))/2.)

        this.renderer.view.style.width = this.width + 'px';
        this.renderer.view.style.height = this.height + 'px';
        this.renderer.resize(this.width*window.devicePixelRatio, this.height*window.devicePixelRatio)
    }

}
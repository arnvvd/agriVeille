import * as PIXI from 'pixi.js';

export default class Scene {

    constructor( _width, _height ) {

        this.width = _width;
        this.height = _height;

        this.children = [];

        this.stage = new PIXI.Container();
        this.renderer = new PIXI.WebGLRenderer( this.width, this.height, { transparent: true } );
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

        this.renderer.view.style.width = `${this.width}px`;
        this.renderer.view.style.height = `${this.height}px`;
 
        // this.renderer.view.style.width = Math.min(this.width, this.height) + 'px';
        // this.renderer.view.style.height = Math.min(this.width, this.height) + 'px';
    }

}
import Emitter from '@/core/eventemitter.js'; 
import {
    CANVAS_CLICK
} from '@/core/messages.js';

export default class InteractiveParticle extends PIXI.Graphics {

    /**
     * [Experiment contructor]
     * - Extends PIXI.Graphics
     * @return void
     */
    constructor(opts) {
  
        super();

        this.opts = opts || {};  
        
        // OPTIONS
        this.slug = this.opts.slug || "";

        // APPEARENCE
        this.beginFill( 0x9726b9 );
        this.drawCircle( 20, 20, 20 );
        this.endFill();

        // INTERACTIVITY
        this.interactive = true;
        this.hitArea = new PIXI.Rectangle(0, 0, 40, 40);
        
        // EVENTS
        this.click = function (e) {
            Emitter.emit(CANVAS_CLICK, {slug: this.slug});
        };
    }
  
    update() {}
  
  }
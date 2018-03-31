export default class Particle extends PIXI.Graphics {

    /**
     * [Experiment contructor]
     * - Extends PIXI.Graphics
     * @return void
     */
    constructor() {
  
        super();

        this.beginFill( 0xff0000 );
        this.drawCircle( 20, 20, 20 );
        this.endFill();

    }
  
    update() {}
  
  }
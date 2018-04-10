import * as PIXI from 'pixi.js'

class Loader {
    constructor() {
        this.loader = new PIXI.loaders.Loader()
        this.sprites = {}
        this.resources = null
    }

    addInLoader(urls) {
        this.urls = urls 
        return new Promise(resolve => {
            let count = 0
            for(let i = 0; i<this.urls.length; i++) {
               
                for(let j = 0; j<this.urls[i].length; j++) {
                    this.loader.add('illu'+i+j, this.urls[i][j])
               
                    count ++
                    if(count == this.urls.length) {
                        resolve()
                    }
                }
               
            }   
        })    
    }

    load() {
        this.loader.load((loader, resources) => {
            this.resources = resources
        })
    }
}

export default Loader
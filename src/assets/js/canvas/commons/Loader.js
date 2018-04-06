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
                this.loader.add('illu'+i, this.urls[i])
               
                count ++
                if(count == this.urls.length) {
                    resolve()
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
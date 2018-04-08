/**
 * ScrollActiveClass
 */
export default class ScrollActive {

    constructor(element, options) {
        options = options || {};
        this.el = element;
        this.screenOffset = options.screenOffset || "bottom";
        this.yoyo =  options.yoyo || true;
        this.elHeight = this.el.offsetHeight;
        this.enterCallback = options.enterCallback;
        this.outCallback = options.outCallback;
        this.isActive = false;
    

        if (this.el) {
            this.calcSizes();
            this.getScreenOffset();
            this.initCurrentPosition(); /* Set after load page */
            this.bindEvents();
            this.onResize();
        }
    }

    bindEvents() {
        if (!this._bindedResize) {
            this._bindedResize = this.onResize.bind(this);
            window.addEventListener('resize', this._bindedResize);
        }

        if (!this._bindedScroll) {
            this._bindedScroll = this.onScroll.bind(this);
            window.addEventListener('scroll', this._bindedScroll);
        }
    }

    unbindEvents() {
        if (this._bindedResize) {
            window.removeEventListener('resize', this._bindedResize);
            this._bindedResize = null;
        }

        if (this._bindedScroll) {
            window.removeEventListener('scroll', this._bindedScroll);
            this._bindedScroll = null;
        }
    }

    getScreenOffset() {

        /* Get ScreenOffset to start animation */
        if (this.screenOffset === "top") {
            this.screenOffsetVal = 0;
        } else if (this.screenOffset === "middle") {
            this.screenOffsetVal = this.wHeight * .5;
        } else if (this.screenOffset === "bottom" ) {
            this.screenOffsetVal = this.wHeight * .9;
        }

    }

    calcDistance() {

        // Calc scrollTop of body and ParentElement
        let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        // Calc rect of element
        let elRect = this.el.getBoundingClientRect();
        let elTop = elRect.top + scrollTop;

        /* Calc distance */
        let distance = scrollTop - elTop;

        return distance;
    }



    initCurrentPosition() {

        let dist = this.calcDistance();

        if ( dist >= - this.screenOffsetVal) {
            
            if (!this.isActive) {
                this.el.classList.add('is-scroll-active');
                if (this.enterCallback) {
                    this.enterCallback();
                }

                this.isActive = true;
            }
            

        } else if (this.isActive){

            if (this.yoyo) {
                this.el.classList.remove('is-scroll-active');

                if (this.outCallback) {
                    this.outCallback();
                }

                this.isActive = false;

            }

        }

    }


    onScroll() {
        this.initCurrentPosition();
    }


    onResize() {
        this.elHeight = this.el.offsetHeight;
        this.calcSizes();
        this.getScreenOffset();
        this.initCurrentPosition(); /* Set after load page */
    }


    calcSizes() {
        const w=window,
            d=document,
            e=d.documentElement,
            g=d.getElementsByTagName('body')[0],
            x=w.innerWidth||e.clientWidth||g.clientWidth,
            y=w.innerHeight||e.clientHeight||g.clientHeight;

        this.wWidth = x;
        this.wHeight = y;
    }
}
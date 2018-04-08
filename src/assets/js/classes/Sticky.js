/**
 * Sticky Class
 */
export default class Sticky {

    constructor(element, options) {
        options = options || {};
        this.$container = element; //Get container
        this.$element = options.$element;
        this.stickedClass = options.stickedClass;
        this.positionnedClass = options.positionnedClass;
        this.marginTop = options.marginTop || 1;
        this.marginBottom = options.marginBottom;
        this.cover = false || options.cover;

        // Do method if $element isn't empty
        if(this.$element){
            this.bindEvents();
            this.stick();
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

    stick() {

        //Get datas
        const parent = this.$container;
        const stickyElement = this.$element;
        const stickedClass = this.stickedClass;
        const positionnedClass = this.positionnedClass;
        const marginBottom = this.marginBottom;
        const boolCover = this.cover;

        // Get scrollTop of body
        const doc = document.documentElement;
        const windowPos = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

        // Prepare value
        const parentOffset = parent.getBoundingClientRect();
        const parentTopOffset = parentOffset.top + windowPos;

        const hParent =  parent.offsetHeight;
        const hElement =  stickyElement.offsetHeight;

        let maxOffset = hParent - hElement - marginBottom;

        if(boolCover){
            maxOffset = hParent;
        }

        const realOffset = windowPos - parentTopOffset;

        if(realOffset <= - this.marginTop){
            stickyElement.classList.remove(stickedClass);
            stickyElement.classList.remove(positionnedClass);
        }else if(realOffset > - this.marginTop && realOffset < maxOffset - this.marginTop){
            stickyElement.classList.add(stickedClass);
            stickyElement.classList.remove(positionnedClass);
        }else{
            stickyElement.classList.remove(stickedClass);
            stickyElement.classList.add(positionnedClass);
        }
    }

    onScroll() {
        this.stick();
    }

    onResize() {
        this.stick();
    }
}
const getTemplate = (placeholder, data = []) => {
    const text = placeholder ?? 'Placeholder';
    const items = data.map(elem => `<li class="select__item" data-type="item" data-id=${elem.id}>${elem.value}</li>`).join('');
    return `
    <div class="select__input" data-type="input">
                <span data-type="value">
                    ${text}
                </span>
                <i class="fa fa-angle-down" aria-hidden="true" data-type="arrow"></i>
            </div>
            <div class="select__dropdown">
                <ul class="select__list">
                    ${items}
                </ul>
            </div>
        `
}


export class Select {
    constructor(selector, options){
        this.$el = document.getElementById(selector);
        this.options = options;
        this.selectedId = null;

        this.#render();
        this.#setup();
    }

    #render(){
        const {placeholder, data} = this.options;
        this.$el.classList.add('select')
        this.$el.innerHTML = getTemplate(placeholder, data);
    }

    #setup(){
        this.clickHandler = this.clickHandler.bind(this);
        this.$el.addEventListener('click', this.clickHandler);
        this.$arrow = this.$el.querySelector('[data-type="arrow"]');
        this.$value = this.$el.querySelector('[data-type="value"]');
    }

    clickHandler(event){
        const {type} = event.target.dataset;
        if(type === 'input'){
            this.toggle();
        } else if (type === 'item'){
            const id = event.target.dataset.id;
            console.log('change id', id)
            this.select(id);
        }
    }

    get current(){
        const a = this.options.data.find(item => item.id == this.selectedId);
        return a;
    }

    select(id){
        this.selectedId = id;
        this.$value.textContent = this.current.value;
        this.close();
    }

    get isOpen(){
        return this.$el.classList.contains('open');
    }

    toggle(){
        if(this.isOpen){
            this.close();
        }else{
            this.open();
        }
    }

    open(){
        this.$el.classList.add('open');
        this.$arrow.classList.add('fa-angle-up');
        this.$arrow.classList.remove('fa-angle-down');
    }

    close(){
        this.$el.classList.remove('open');
        this.$arrow.classList.remove('fa-angle-up');
        this.$arrow.classList.add('fa-angle-down');
    }

    destroy(){
        this.$el.removeEventListener('click', this.clickHandler);
    }
}
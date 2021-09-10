export class PageComponent{
    private element:HTMLUListElement;
    constructor(){
        this.element = document.createElement('ul');
        this.element.setAttribute('class','page');
        this.element.textContent = 'This is PageComponent';
    }

    attachTo(parent:HTMLElement, position:InsertPosition = 'afterbegin'){//position 값이 들어오지 않으면 기본적으로 afterbegin
        parent.insertAdjacentElement(position, this.element);
    }
}
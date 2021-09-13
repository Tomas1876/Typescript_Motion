import { BaseComponent, Component } from './../component.js';

export interface Composable {
    addChild(child:Component): void;
}

class PageItemComponent extends BaseComponent<HTMLElement> implements Composable{
    constructor(){
        super(`<li class="page-item">
                    <section class="page-item__body">
                        <div class="page-item__controls">
                            <button class="close">&times;</button>
                        </div>
                    </section>
                </li>`)
    }

    addChild(child:Component){
        const container = this.element.querySelector('.page-item__body')! as HTMLElement;
        child.attachTo(container);
    }
}
export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable{
    constructor(){
        super(`<ul class='page'></ul>`)
    }

    addChild(section:Component){ //각 상황에 해당하는 섹션 컴포넌트를 전달
        const item = new PageItemComponent(); //아이템을 새로 만든다
        item.addChild(section); // 새로 만든 아이템을 전달받은 섹션에 넣어준다
        item.attachTo(this.element, 'beforeend'); // 만든 아이템을 현재 페이지에 붙여준다

    }
   
}
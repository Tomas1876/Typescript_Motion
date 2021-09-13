export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

/**
 * Encapsulate the HTML element creation
 */

//HTMLElement라고 해도 이 컴포넌트는 문제가 없지만
 //더 다양한 타입들이 사용할 수 있도록 T 타입으로 지정한 다음
 //이것이 HTMLElement를 상속하게 한다
//이렇게 하면 HTMLElement 뿐 아니라 HTMLElement를 상속하는 모든 타입이 이 컴포넌트를 상속할 수 있다
export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;
  // 요소의 상태는 변경할 수 있지만 요소 자체를 바꿀 수는 없도록 readonly 사용  

  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
        //parent 컨테이너 어딘가에 자식 요소를 추가할 수 있는 API
        //첫 번째 인자가 추가할 위치, 두 번째 인자가 추가할 요소
  }
}

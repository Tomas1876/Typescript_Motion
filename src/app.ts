import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';

class App{
    private readonly page: PageComponent;
    constructor(appRoot:HTMLElement){
        this.page = new PageComponent();
        this.page.attachTo(appRoot) //만들어진 page를 appRoot에 붙여준다

        const image = new ImageComponent('Image Title', 'https://picsum.photos/seed/picsum/600/300');
        image.attachTo(appRoot, 'beforeend') //마지막에 추가
    }
}

new App(document.querySelector('.document')!)//null이 아니고 무조건 존재하므로 ! 사용한다
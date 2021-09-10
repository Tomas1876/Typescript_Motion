import { PageComponent } from './components/page';

class App{
    private readonly page: PageComponent;
    constructor(appRoot:HTMLElement){
        this.page = new PageComponent();
        this.page.attachTo(appRoot) //만들어진 page를 appRoot에 붙여준다

    }
}

new App(document.querySelector('.document')!)//null이 아니고 무조건 존재하므로 ! 사용한다
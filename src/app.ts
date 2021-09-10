import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent } from './components/page/page.js';
import { TodoComponent } from './components/page/item/todo.js';

class App{
    private readonly page: PageComponent;
    constructor(appRoot:HTMLElement){
        this.page = new PageComponent();
        this.page.attachTo(appRoot) //만들어진 page를 appRoot에 붙여준다

        const image = new ImageComponent('Image Title', 'https://picsum.photos/seed/picsum/600/300');
        image.attachTo(appRoot, 'beforeend') 
        const note = new NoteComponent('Note title', 'Note body');
        note.attachTo(appRoot, 'beforeend');
        const todo = new TodoComponent('Todo title', 'Todo');
        todo.attachTo(appRoot, 'beforeend');
        const video = new VideoComponent('Video Title','https://www.youtube.com/watch?v=I6fP5a-Z0yg/600/300');
        video.attachTo(appRoot, 'beforeend')
    }
}

new App(document.querySelector('.document')!)//null이 아니고 무조건 존재하므로 ! 사용한다
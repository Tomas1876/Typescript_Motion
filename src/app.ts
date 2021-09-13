import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent } from './components/page/page.js';
import { TodoComponent } from './components/page/item/todo.js';
import { Component } from './components/component.js';

class App{
    private readonly page: Component & Composable; //컴포넌트이면서, addChild를 실행할 수 있는 Composalble인 page
    constructor(appRoot:HTMLElement){
        this.page = new PageComponent();
        this.page.attachTo(appRoot) //만들어진 page를 appRoot에 붙여준다

        const image = new ImageComponent('Image Title', 'https://picsum.photos/seed/picsum/600/300');
        this.page.addChild(image)
        const note = new NoteComponent('Note title', 'Note body');
        this.page.addChild(note)
        const todo = new TodoComponent('Todo title', 'Todo');
        this.page.addChild(todo)
        const video = new VideoComponent('Video Title','https://www.youtube.com/watch?v=I6fP5a-Z0yg/600/300');
        this.page.addChild(video)
    }
}

new App(document.querySelector('.document')! as HTMLElement)//null이 아니고 무조건 존재하므로 ! 사용한다
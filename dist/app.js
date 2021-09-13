import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent } from './components/page/page.js';
import { TodoComponent } from './components/page/item/todo.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/seed/picsum/600/300');
        this.page.addChild(image);
        const note = new NoteComponent('Note title', 'Note body');
        this.page.addChild(note);
        const todo = new TodoComponent('Todo title', 'Todo');
        this.page.addChild(todo);
        const video = new VideoComponent('Video Title', 'https://www.youtube.com/watch?v=I6fP5a-Z0yg/600/300');
        this.page.addChild(video);
    }
}
new App(document.querySelector('.document'));

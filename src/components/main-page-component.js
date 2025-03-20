import BookFormComponent from "./book-form-component";

class MainPageComponent {

    constructor(bookService, storageService) {
        this.bookService = bookService;
        this.storageService = storageService;
    }

    async start(){
        const nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click', () => this.nextPressed())

        const prevBtn = document.getElementById('prev-btn');
        prevBtn.addEventListener('click', () => this.previousPressed())

        this.books = await this.bookService.getBooksData();
        this.render(this.books);
    } 

    render(books) {
        const mainContainer = document.querySelector('#main-container');
        mainContainer.innerHTML = '';
        for (let i = 0; i < books.length; i++) {
            const book = books[i];
            const formComponent = new BookFormComponent(book, this.storageService);
            const form = formComponent.render();           
            mainContainer.appendChild(form);
        }
    }

    async nextPressed(){
        this.bookService.nextPage();
        this.books = await this.bookService.getBooksData();
        this.render(this.books)
    }

    async previousPressed(){
        this.bookService.previousPage();
        this.books = await this.bookService.getBooksData();
        this.render(this.books)
    }
}

export default MainPageComponent;
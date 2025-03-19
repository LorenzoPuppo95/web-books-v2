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
        this.render(this.books)
    } 

    render(books) {
        const mainContainer = document.querySelector('#main-container');
        mainContainer.innerHTML = '';
        for (let i = 0; i < books.length; i++) {
            const book = books[i]
            const bookContainer = document.createElement('a');
            // bookContainer.href = './detail.html?id=' + book.id;
            const html = `
                <img src="${book.formats["image/jpeg"]}" alt="">
                <h3>${book.title}</h3>
                <h3>${book.id}</h3>
            `
            bookContainer.innerHTML = html;
            const saveBtn = document.createElement('button');
            saveBtn.addEventListener('click', (event) => this.saveBook(event, i))
            const node = document.createTextNode('salva');
            saveBtn.appendChild(node);
            bookContainer.appendChild(saveBtn);
            mainContainer.appendChild(bookContainer);
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

    saveBook(event, index){
        event.preventDefault();
        const selectedBook = this.books[index]
        this.storageService.save(selectedBook);
    }
}

export default MainPageComponent;
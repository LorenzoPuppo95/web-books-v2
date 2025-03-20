export default class BookFormComponent {

    constructor(book, storageService, hasSave = true) {
        this.book = book;
        this.storageService = storageService
        this.hasSave = hasSave;
    }

    render() {
        const bookContainer = document.createElement('a');
        bookContainer.classList.add('book-container');
        const isSaved = this.storageService.isSaved(this.book.id);
        const heartIcon = isSaved ? 'fas fa-heart' : 'far fa-heart';

        bookContainer.innerHTML = `
            <div>
                <div class="image-container">
                    <img src="${this.book.image}" alt="${this.book.title}" />
                    <button type="button" class="save-btn"><i class="${heartIcon}"></i></button>
                </div>
                <h2>${this.book.title}</h2>
                <p>Author: ${this.book.authors.map(author => `<span>${author.name} (${author.birth_year || 'N/A'} - ${author.death_year || 'N/A'})</span>`).join(', ')}</p>
            </div>
        `;
        bookContainer.href = `detail.html?id=${this.book.id}`;
        bookContainer.querySelector('.save-btn').addEventListener('click', (event) => this.saveBook(event));
        return bookContainer;
    }

    saveBook(event) {
        event.preventDefault();
        const button = event.currentTarget;
        const icon = button.querySelector('i');
        const isSaved = this.storageService.isSaved(this.book.id);

        if (isSaved) {
            this.storageService.save(this.book);
            icon.classList.remove('fas');
            icon.classList.add('far');
        } else {
            this.storageService.save(this.book);
            icon.classList.remove('far');
            icon.classList.add('fas');
        }
    }
}

// libri pagination, detail, preferiti, rimozione preferiti, immagine o icona per i preferiti
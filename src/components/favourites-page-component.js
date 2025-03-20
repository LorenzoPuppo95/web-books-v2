import BookFormComponent from "./book-form-component";

export default class FavouritesPageComponent {

    constructor( storageService) {
        this.storageService = storageService;
    }

    async start(){
        this.books = await this.storageService.getFavouritesBooksData();
        this.render(this.books);
    }

    render(books) {
        const mainContainer = document.querySelector('#main-container');
        mainContainer.innerHTML = '';
        if (books.length!==0){
            for (let i = 0; i < books.length; i++) {
                const book = books[i];
                const formComponent = new BookFormComponent(book, this.storageService, false);
                const form = formComponent.render();
                mainContainer.appendChild(form);
            }
        } else {
            const emptyFavourites = document.createElement('h3');
            emptyFavourites.textContent = 'No books in favourites';
            mainContainer.appendChild(emptyFavourites);
        }
        return mainContainer;
    }
}
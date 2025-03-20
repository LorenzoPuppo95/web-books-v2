class StorageService {

    constructor() {}

    save(book){
        const favouritesBookString = localStorage.getItem('favourites');
        let favouritesBooks = [];
        if (favouritesBookString) {
            favouritesBooks = JSON.parse(favouritesBookString);
        }

        const bookIndex = favouritesBooks.findIndex(favouritesBook => favouritesBook.id === book.id);
        if (bookIndex === -1) {
            favouritesBooks.push(book);
        } else {
            favouritesBooks.splice(bookIndex, 1);
        }

        localStorage.setItem('favourites', JSON.stringify(favouritesBooks));
    }

    getFavouritesBooksData(){
        const favouritesBookString = localStorage.getItem('favourites');
        if (favouritesBookString) {  
            const favouritesBooks = JSON.parse(favouritesBookString);
            return favouritesBooks;
        } else {
            return [];
        }
    }

    isSaved(bookId) {
        const favouritesBookString = localStorage.getItem('favourites');
        if (favouritesBookString) {
            const favouritesBooks = JSON.parse(favouritesBookString);
            return favouritesBooks.some(favouritesBook => favouritesBook.id === bookId);
        }
        return false;
    }
}

export default StorageService;
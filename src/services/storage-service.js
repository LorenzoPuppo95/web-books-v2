class StorageService {

    constructor() {}

    save(book){
        const starredBookString = localStorage.getItem('starred');
        if (starredBookString) {
            
            const starredBooks = JSON.parse(starredBookString);
            starredBooks.push(book);
            localStorage.setItem('starred', JSON.stringify(starredBooks));
        } else {
            const starredBooks = [];
            starredBooks.push(book);
            localStorage.setItem('starred', JSON.stringify(starredBooks));
        }    
    }

    getStarredBookData(){
        const starredBookString = localStorage.getItem('starred');
        if (starredBookString) {  
            const starredBooks = JSON.parse(starredBookString);
            return starredBooks;
        } else {
            const starredBooks = [];
            return starredBooks;
        }
    }
}

export default StorageService;
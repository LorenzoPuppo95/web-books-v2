class BookService {

    static BASE_URL = 'https://gutendex.com/books/'
    static PAGES_NUMBER

    constructor(page=1) {
        this.page = page;
    }

    async getBooksData(){
        const url = BookService.BASE_URL +
                    '?page=' + this.page
        const response =  await fetch(url);
        const data = await response.json();
        BookService.PAGES_NUMBER=Math.round(data.count/32);
        const results = data.results;
        const books = [];
        if (Array.isArray(results)) {
            for (const book of results) {
                console.log(book);
                const littleBook = {
                    id: book.id,
                    title: book.title,
                    authors: book.authors || 'Unknown',
                    image: book.formats['image/jpeg'] || 'No image available'
                };
                books.push(littleBook);
            }
        } else {
            console.error('Results is not an array:', results);
        }
        return books;
    }

    nextPage(){
        if (this.page===BookService.PAGES_NUMBER){
            this.page = 1;
        } else{
            this.page += 1;
        }
        
    }

    previousPage(){
        if (this.page===1){
            this.page = BookService.PAGES_NUMBER;
        } else{
            this.page -= 1;
        }
    }

    async getBookByID(id){
        const url = BookService.BASE_URL + id;
        const response =  await fetch(url);
        const data = await response.json();
        const littleBook = {
            id: data.id,
            title: data.title,
            authors: data.authors || 'Unknown',
            image: data.formats['image/jpeg'] || 'No image available',
            summaries: data.summaries || 'No summaries available',
            subjects: data.subjects || 'No subjects available',
        };
        return littleBook;
    }
}

export default BookService;
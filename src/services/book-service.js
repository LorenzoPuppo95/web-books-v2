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
        debugger;
        const results = data.results;
        return results;
    }

    nextPage(){
        if (this.page===PAGES_NUMBER){
            this.page = 1;
        } else{
            this.page += 1;
        }
        
    }

    previousPage(){
        if (this.page===1){
            this.page = PAGES_NUMBER;
        } else{
            this.page -= 1;
        }
    }
    // async getPokemonByID(id){
    //     const url = PokeService.BASE_URL + 
    //                 PokeService.POKEMON_URL + id;
    //     const response =  await fetch(url);
    //     const data = await response.json();       
    //     return data;
    // }
}

export default BookService;
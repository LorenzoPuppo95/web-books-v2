export default class DetailPageComponent {

    constructor(bookService) {
        this.bookService = bookService;
    }

    async start(){
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const book = await this.bookService.getBookByID(id);
        this.render(book);
    }
    
    render(book) {
        console.log(book);
        const mainContainer = document.getElementById('main-container');
        mainContainer.innerHTML = `
            <h1>${book.title}</h1>
            <img src="${book.image}" alt="${book.title}" />
            <h2>Authors</h2>
            <div>
                ${book.authors.map(author => `
                    <p>${author.name} (${author.birth_year || 'N/A'} - ${author.death_year || 'N/A'})</p>
                `).join('')}
            </div>
            <h2>Subjects</h2>
            <div>
                ${book.subjects.map(subject => `<p>${subject}</p>`).join('')}
            </div>
            <h2>Summary</h2>
            <p>${book.summaries[0] || 'No summary available'}</p>
        `;
        return mainContainer;
    }
}
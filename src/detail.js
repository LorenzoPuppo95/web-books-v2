import BookService from "./services/book-service";
import DetailPageComponent from "./components/detail-page-component";

const bookS = new BookService();

const detailPageC = new DetailPageComponent(bookS);

detailPageC.start();
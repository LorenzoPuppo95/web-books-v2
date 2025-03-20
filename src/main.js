import BookService from "./services/book-service";
import MainPageComponent from "./components/main-page-component";
import StorageService from "./services/storage-service";

const bookS = new BookService(1);

const storageS = new StorageService();

const homePageC = new MainPageComponent(bookS, storageS);

homePageC.start();
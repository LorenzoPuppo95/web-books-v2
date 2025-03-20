import FavouritesPageComponent from "./components/favourites-page-component";
import StorageService from "./services/storage-service";

const storageS = new StorageService();

const starredPageC = new FavouritesPageComponent(storageS);

starredPageC.start();
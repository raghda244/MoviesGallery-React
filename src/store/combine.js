import { combineReducers } from "redux";
import FavouritesReducers from "./reducers/FavouriteReducer";
import movieReducer from "./reducers/movieReducer";

export default  combineReducers({
    fav:FavouritesReducers,
    movies:movieReducer
})
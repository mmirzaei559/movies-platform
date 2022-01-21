import { combineReducers } from "redux";
import { matchedMoviesReducer, selectedMovieReducer } from "./moviesReducer";
const reducers = combineReducers({
    matchedMovies: matchedMoviesReducer,
    selectedMovies: selectedMovieReducer,
});
export type RootState = ReturnType<typeof reducers>

export default reducers;
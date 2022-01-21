import { ActionTypes } from "./actionTypes";
type Movies = {
    title: string,
    poster_path: string,
    id: number
}
export const setAllMatchedMovies = (movies:Movies) => {
    return {
        type: ActionTypes.SET_ALL_MATCHED_MOVIES,
        payload: movies
    };
};
export const addMovieToWatchLater = (movies:Movies) => {
    return {
        type: ActionTypes.ADD_MOVIE_TO_WATCH_LATER,
        payload: movies
    };
};
export const removeMovieFromWatchLater = (id:number) => {
    return {
        type: ActionTypes.REMOVE_MOVIE_FROM_WATCH_LATER,
        payload: id
    };
};
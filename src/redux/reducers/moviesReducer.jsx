import { ActionTypes } from "../actions/actionTypes";

const intialState = {
    movies: [],
    WatchLaterList: []
};
export const matchedMoviesReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ALL_MATCHED_MOVIES:
            return {...state, movies: payload} ;
        default:
            return state;
    }
};

export const selectedMovieReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_MOVIE_TO_WATCH_LATER:
            return { ...state, WatchLaterList: [payload, ...state.WatchLaterList] };
        case ActionTypes.REMOVE_MOVIE_FROM_WATCH_LATER:
            return {...state, WatchLaterList: state.WatchLaterList.filter(
                    (movie) => movie.id !== payload
                )};
        default:
            return state;
    }
};
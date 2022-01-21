import React from "react";
import {removeMovieFromWatchLater} from "../../redux/actions/movieActions";
import {useDispatch} from "react-redux";
import Movie from "../../interfaces/movie";
interface Props {
    movie: Movie
}
export const MovieCard: React.FC<Props> = ({ movie }) => {
    const dispatch = useDispatch();
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div className="filler-poster"/>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                </div>
            </div>
            <div className="watch-later-btn-box">
                <div className="wrapper">
                    <button
                        className="btn btn-watch-later"
                        onClick={() => dispatch(removeMovieFromWatchLater(movie.id))}
                    >
                        <span className="watch-later">remove movie</span>
                        <span className="clock"><i className="fas fa-trash-alt" aria-hidden="true"></i></span>
                    </button>
                </div>
            </div>
        </div>
    );
};
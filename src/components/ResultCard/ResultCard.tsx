import React, {useState} from "react";
import {addMovieToWatchLater} from "../../redux/actions/movieActions";
import {useDispatch, useSelector} from "react-redux";
import Movie from "../../interfaces/movie";
import {RootState} from "../../redux/reducers";
import movie from "../../interfaces/movie";

interface Props {
    movie: Movie
}
export const ResultCard: React.FC<Props> = ({movie}) => {
    let moviesInWatchLaterList = useSelector((state: RootState) => state.selectedMovies.WatchLaterList);
    const dispatch = useDispatch();
    let storedMoviesInWatchLater = moviesInWatchLaterList.find((o: Movie) => o.id === movie.id);
    const addedToWatchLaterList = !!storedMoviesInWatchLater;
    const [favorite, setFavorite] = useState(true);

    const displayFav = () => {
        if (favorite) {
            return (<span style={{color: 'Tomato'}}><i className="far fa-star"></i></span>);
        } else {
            return ( <span style={{color: 'Tomato'}}><i className="fas fa-star"></i></span>);
        }
    }


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
                    <span className="favorite-movie-star" onClick={() => setFavorite(!favorite)}>{displayFav()}</span>
                    <button
                        className="btn"
                        onClick={() => dispatch(addMovieToWatchLater(movie))}
                        disabled={addedToWatchLaterList}
                    >
                        <span className="watch-later">{
                            addedToWatchLaterList ? 'exist in watch later page' : 'watch later'
                        }</span>
                        <span className="clock"><i className="fa fa-clock" aria-hidden="true"></i></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

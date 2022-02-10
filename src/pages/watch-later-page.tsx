import React from 'react';
import IPage from '../interfaces/page';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {MovieCard} from "../components/MovieCard/MovieCard";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers";

const WatchLaterPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const movies = useSelector((state:RootState) => state.selectedMovies.WatchLaterList);
    return (
        <div>
            <div className="container watch-later-box">
                {
                    movies.length > 0 ?
                        <div className="add-content">
                            {movies.length > 0 && (
                                <ul className="results">
                                    {movies.map((movie: any) => (
                                        <li key={movie.id}>
                                            <MovieCard movie={movie} key={movie.id}/>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        :
                        <h2 className="no-movies">No movies in your watch later list! Add some!</h2>
                }
            </div>
        </div>
    );
}

export default withRouter(WatchLaterPage);
import React from "react";
import IPage from '../interfaces/page';
import {ResultCard} from "../components/ResultCard/ResultCard";
import {useSelector} from "react-redux";
import {SearchInput} from "../components/SearchInput/SearchInput";
import AQUAMAN from "../assets/videos/AQUAMAN.mp4";
import {RootState} from "../redux/reducers";

const HomePage: React.FunctionComponent<IPage> = () => {
    const movies = useSelector((state: RootState) => state.matchedMovies.movies);

    return (
        <div>
            <div className="container">
                <SearchInput/>
                <div>
                    <video autoPlay loop muted>
                        <source src={AQUAMAN} type="video/mp4"/>
                    </video>
                </div>
                {
                    movies.length > 0 ?
                        <div className="add-content">
                            <ul className="results">
                                {movies.map((movie: any) => (
                                    <li key={movie.id}>
                                        <ResultCard movie={movie}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        :
                        ''
                }
            </div>
        </div>
    );
}

export default HomePage;
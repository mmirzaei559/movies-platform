import React, {useEffect, useState} from "react";
import IPage from '../interfaces/page';
import {ResultCard} from "../components/ResultCard/ResultCard";
import {useDispatch, useSelector} from "react-redux";
import {setAllMatchedMovies} from "../redux/actions/movieActions";
import {SearchInput} from "../components/SearchInput/SearchInput";
// @ts-ignore
import AQUAMAN from "../assets/videos/AQUAMAN.mp4";

const HomePage: React.FunctionComponent<IPage> = () => {
    // @ts-ignore
    const movies = useSelector((state) => state.matchedMovies.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    const onChange = (e: any) => {
        e.preventDefault();
        setQuery(e.target.value);
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_Key}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    dispatch(setAllMatchedMovies(data.results))
                }
            });
    };

    useEffect(() => {
    }, []);

    return (
        <div>
            <div className="container">
                <SearchInput value={query} onChange={onChange}/>
                <div>
                    <video autoPlay loop muted>
                        <source src={AQUAMAN} type="video/mp4"/>
                    </video>
                </div>
                {
                    movies.length > 0 ?
                        <div className="add-content">
                            {movies.length > 0 && (
                                <ul className="results">
                                    {movies.map((movie: any) => (
                                        <li key={movie.id}>
                                            <ResultCard movie={movie}/>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        :
                        ''
                }
            </div>
        </div>
    );
}

export default HomePage;
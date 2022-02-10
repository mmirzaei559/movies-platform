import React, {useState} from "react";
import "../../styles/SearchInput.scss";
import {useDispatch} from "react-redux";
import {setAllMatchedMovies} from "../../redux/actions/movieActions";

export const SearchInput: React.FC = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    const changedMovieName = (e: any) => {
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
  return (
      <div className="search-box-container">
          <input
              data-testid="searchMovies"
              onChange={changedMovieName}
              value={query}
              type="text"
              placeholder="Search Movies..."/>
              <div className="search"></div>
      </div>
  );
};
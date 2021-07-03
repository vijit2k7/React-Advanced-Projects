import React, { useContext } from "react";
import Moment from "react-moment";
import {WatchListContext} from "../App";

const ResultCard = ({ movie }) => {

  const useContextValue=useContext(WatchListContext);
  console.log("use result card context value",useContextValue.state,useContextValue.dispatch);
  function watchListHandler()
  {
      console.log("in watch list handler",movie);
      useContextValue.dispatch('ADD_MOVIE_WATCHLIST',{payload:movie});
      //useContextValue.setWatch([...useContextValue.watch,movie]);  using useState
  }
  console.log("hhhhh",useContextValue.watch);
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            onClick={watchListHandler}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
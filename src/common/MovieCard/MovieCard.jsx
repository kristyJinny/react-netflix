import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
  const imageUrl = `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`;

  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }} className="movie-card">
      <div className="overlay">
        <div className="into-head">
          <h1 className="overlay-title">{movie.title}</h1>
          <div className="badge-area">
            {movie.genre_ids.map((id) => (
              <Badge bg="danger">{id}</Badge>
            ))}
          </div>
        </div>
        <div className="info-bottom">
          <div>투표: {movie.vote_average}</div>
          <div className="">인기: {movie.popularity}</div>
          <div className="">{movie.adult ? "성인" : "전체"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import "react-multi-carousel/lib/styles.css";
import { useMovieGenreQuery } from "../../hooks/\buseMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: genresData } = useMovieGenreQuery();
  //console.log(genres);

  const imageUrl = `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`;

  const showGenre = (genreIdList) => {
    if (!genresData) return []; // 장르 정보가 없을 경우 빈 배열 반환

    const genresNameList = genreIdList.map((id) => {
      const genreObj = genresData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genresNameList;
  };

  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }} className="movie-card">
      <div className="overlay">
        <div className="into-head">
          <h1 className="overlay-title">{movie.title}</h1>
          <div className="badge-area">
            {showGenre(movie.genre_ids).map((genre, index) => (
              <Badge bg="danger" key={index} className="me-1">
                {genre}
              </Badge>
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

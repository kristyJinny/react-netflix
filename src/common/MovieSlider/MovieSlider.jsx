import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieSlider.style.css";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div>
      <h3 className="title">{title}</h3>
      {movies.length > 0 ? (
        <Carousel
          responsive={responsive}
          itemClass="movie-slider p-1"
          infinite={true}
          containerClass="carousel-container"
          sliderClass="sliderClass"
        >
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </Carousel>
      ) : (
        <div>0 results</div>
      )}
    </div>
  );
};

export default MovieSlider;

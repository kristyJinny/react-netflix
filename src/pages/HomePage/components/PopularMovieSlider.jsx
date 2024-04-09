import React from "react";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";
import { responsive } from "../../../constants/responsive";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import ErrorMessage from "../../../common/ErrorMessage";

const PopularMovieSlider = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <MovieSlider
      title="Popular Movies"
      movies={data.results}
      responsive={responsive}
    />
  );
};

export default PopularMovieSlider;

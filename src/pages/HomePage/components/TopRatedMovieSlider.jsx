import React from "react";
import { useTopRatedMoviesQuery } from "../../../hooks/useTopRatedMovies";
import { responsive } from "../../../constants/responsive";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import ErrorMessage from "../../../common/ErrorMessage";

const TopRatedMovieSlider = () => {
  const { data, isLoading, error, isError } = useTopRatedMoviesQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <MovieSlider
      title="Top rated Movies"
      movies={data.results}
      responsive={responsive}
    />
  );
};

export default TopRatedMovieSlider;

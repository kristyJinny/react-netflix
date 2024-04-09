import React from "react";
import { responsive } from "../../../constants/responsive";
import { useUpcomingMoviesQuery } from "../../../hooks/useUpcomingMovies";
import ErrorMessage from "../../../common/ErrorMessage";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";

const UpcomingMovieSlider = () => {
  const { data, isLoading, error, isError } = useUpcomingMoviesQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <MovieSlider
      title="Upcoming Movies"
      movies={data.results}
      responsive={responsive}
    />
  );
};

export default UpcomingMovieSlider;

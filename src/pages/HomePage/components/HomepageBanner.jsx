import React from "react";
import Banner from "../../../common/Banner/Banner";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";
import ErrorMessage from "../../../common/ErrorMessage";

const HomepageBanner = () => {
  const { isLoading, data, error, isError } = usePopularMoviesQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return <Banner movie={data.results[0]} />;
};

export default HomepageBanner;

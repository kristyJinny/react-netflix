import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/useSearchMovies";

// nav 바 클릭 해서 온 경우 -> popular movie 보여주기
export const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q") || "";

  const [data, isLoading, isError, error] = useSearchMovieQuery({ keyword });
  console.log("dd, data");

  return <div data-page="MoviePage">MoviePage</div>;
};

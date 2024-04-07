import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import "./Banner.style.css";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("ddd", data);

  if (isLoading) {
    <div>로딩중...</div>;
  }

  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }

  const imageUrl = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data?.results[1].poster_path}`;

  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="banner"
      // style={{
      //   backgroundImage:
      //   "url("
      //   +`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data.results[0].poster_path}`
      //   +")",
      // }}
    >
      <div className="text-whtie banner-text-area">
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;

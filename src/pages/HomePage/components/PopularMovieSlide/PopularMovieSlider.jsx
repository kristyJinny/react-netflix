import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularMovieSlider.style.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    //partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    //partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    //partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  },
};

const PopularMovieSlider = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div data-component="Slider">
      <h3>Popular Movies</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}

        // swipeable={false}
        // draggable={false}
        // showDots={true}
        // ssr={true}

        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default PopularMovieSlider;

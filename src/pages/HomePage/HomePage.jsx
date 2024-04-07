import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlider from "./components/PopularMovieSlide/PopularMovieSlider";

// 1. 배너 => 인기 영화를 들고 와서, 첫 번째 아이템을 보여주자 -> 컴포넌트 만들기
// 2. 인기 영화 -> API 호출
// 3. 최신 영화
// 4. 개볼 예정 영화

export const HomePage = () => {
  return (
    <div data-page="HomePage">
      <Banner />
      <PopularMovieSlider />
    </div>
  );
};

import React, { useState } from "react";
import PopularMovieSlider from "./components/PopularMovieSlider";
import TopRatedMovieSlider from "./components/TopRatedMovieSlider";
import UpcomingMovieSlider from "./components/UpcomingMovieSlider";
import HomepageBanner from "./components/HomepageBanner";

// 1. 배너 => 인기 영화를 들고 와서, 첫 번째 아이템을 보여주자 -> 컴포넌트 만들기
// 2. 인기 영화 -> API 호출
// 3. 최신 영화
// 4. 개볼 예정 영화

export const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div data-page="HomePage">
      <HomepageBanner />
      <div className={isMobile ? "px-3" : "px-5"}>
        <PopularMovieSlider />
        <TopRatedMovieSlider />
        <UpcomingMovieSlider />
      </div>
    </div>
  );
};

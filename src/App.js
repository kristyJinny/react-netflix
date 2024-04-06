import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { MoviePage } from "./pages/Movies/MoviePage";
import { MovieDetail } from "./pages/MovieDetail/MovieDetail";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

// 메인 홈 화면: "/"
// 영화 전체 보여주는 페이지 ( 서치): "/movies"
// 영화 디테일: /movies/:id
// 추천 영화: /movies/:id/recomoands
// 리쥬 영화: /movies/:id/reviews

function App() {
  return (
    <div className="App"> 
      <Routes>
        {/* user 화면 */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies">
            <Route index element={<MoviePage />} />
            {/* <Route path="/:id" element={<MovieDetail />} /> */}
          </Route>

          {/*  같은 내용
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:id" element={<MovieDetail />} /> */}
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>

      {/* 어드민 화면
      <Routes>
        <Route path="/admin" element={AdminLayout}></Route>
      </Routes> */}
    </div>
  );
}

export default App;

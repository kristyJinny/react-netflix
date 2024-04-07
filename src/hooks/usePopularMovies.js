import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";


const fectchPopularMovies = () => {
    return api.get(`/movie/popular`);
}

export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey: ['move-popular'],
        queryFn: fectchPopularMovies
    })
}
// hook 을 만드는 이유는 , 다른 곳에서도 사용 할 수 있으니깐
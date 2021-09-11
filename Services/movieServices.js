import axios from "axios";

const baseApi = "https://api.themoviedb.org/3/movie";
const apiKey = "api_key=67de45401430218afb0057fa04ee72fd";

const popularMoviesApi = `${baseApi}/popular?${apiKey}`;
const upcomingMoviesApi = `${baseApi}/upcoming?${apiKey}`;

//-------------Function to get popular movies through api--------//
export const getPopularMovies = async () => {
  const result = await axios.get(popularMoviesApi);
  return result.data.results;
};

//--------------Function to get Upcoming moview through api-------//
export const getUpComingMovies=async()=>{
    const result=await axios.get(upcomingMoviesApi);
    return result.data.results;
}
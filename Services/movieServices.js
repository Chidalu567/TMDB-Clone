import axios from "axios";

const baseApi = "https://api.themoviedb.org/3/movie";
const tvApi = "https://api.themoviedb.org/3";
const discoverApi = "https://api.themoviedb.org/3";
const apiKey = "api_key=67de45401430218afb0057fa04ee72fd";

const popularMoviesApi = `${baseApi}/popular?${apiKey}`;
const upcomingMoviesApi = `${baseApi}/upcoming?${apiKey}`;
const popularTv = `${tvApi}/tv/popular?${apiKey}`;
const familyTv = `${discoverApi}/discover/movie?${apiKey}&with_genres=10751`;
const documentaryTv = `${discoverApi}/discover/movie?${apiKey}&with_genres=99`;

//-------------Function to get popular movies through api--------//
export const getPopularMovies = async () => {
  const result = await axios.get(popularMoviesApi);
  return result.data.results;
};

//--------------Function to get Upcoming moview through api-------//
export const getUpComingMovies = async () => {
  const result = await axios.get(upcomingMoviesApi);
  return result.data.results;
};

//------------Function to get popular tv shows---------//
export const getPopularTv = async () => {
  const result = await axios.get(popularTv);
  return result.data.results;
};

//----------Function to get Family tv shows ------------//
export const getFamilyTv = async () => {
  const result = await axios.get(familyTv);
  return result.data.results;
};

//functin to get documentary tv shows ----------//
export const getDocumentaryTv = async () => {
  const result = await axios.get(documentaryTv);
  return result.data.results;
};

//function to get The Details of a specific movie
export const getSpecificMovie = async (id) => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=67de45401430218afb0057fa04ee72fd`
  );

  return result.data;
}; //javascript function definition

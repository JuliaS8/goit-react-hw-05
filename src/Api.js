import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjE0ZjIwNDNmMzQyYTEyMjI1MzU1ZGM5YTk5MWIzOSIsIm5iZiI6MTcyMzg0MDcwNS45ODEyNDIsInN1YiI6IjY2YmZhZTI2M2IyYzA4YmMxNzFmMzY0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19T_iYip2F6k4t3B939pMKTtS2BOsXU1PL-3LNzk284',
  accept: 'application/json',
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day');
  return data;
};

export const fetchSearchMovie = async query => {
  const { data } = await axios.get('/search/movie', {
    params: { query },
  });
  return data;
};

export const fetchMovieDetails = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}`);
  return data;
};

export const fetchMovieCredits = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/credits`);
  return data;
};

export const fetchMovieReviews = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/reviews`);
  return data;
};

import css from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../Api";
import Section from "../../components/Section/Section";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesList = async () => {
      setLoading(true);
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesList();
  }, []);

  return (
    <Section>
      {loading && <Loader />}
      <h1 className={css.homePageTitle}>Trending movies</h1>
      <MovieList movies={movies} />
    </Section>
  );
}

export default HomePage;
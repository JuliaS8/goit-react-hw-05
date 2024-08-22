import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../Api";
import { TbPhotoCancel } from "react-icons/tb";
import css from './MovieCast.module.css'

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const dataCast = await fetchMovieCredits(movieId);
        console.log(dataCast);
        setCast(dataCast.cast || []);
      } catch (err) {
        console.log(err);
      }
    };
    getMovieCredits();
  }, [movieId]);


  return (
    <div className={css.movieCastContainer}>
      <ul className={css.movieCastList}>
        {cast.map((actor) => {
          const imageActor = actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : "";
          return (
            <li key={actor.id} className={css.movieCastItem}>
              {actor.profile_path ? (
                <img
                  src={imageActor}
                  alt={actor.name}
                  className={css.movieCastImage}
                />
              ) : (
                <div className={css.movieCastIcon}>
                  <TbPhotoCancel size={80} color="#a3876dec" />
                </div>
              )}
              <h4 className={css.movieCastName}>{actor.name}</h4>
              <p className={css.movieCastCharacter}>
                (Character: {actor.character})
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieCast;
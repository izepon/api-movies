import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as key from '../../config/key';
import { Container } from '../Details/style';

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const imagePath = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key.APIKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, poster_path, release_date, overview } = data;
        const movie = {
          id,
          title,
          image: `${imagePath}${poster_path}`,
          sinopse: overview,
          releaseDate: release_date,
        };
        setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <h1>Sinopse</h1>
      <div className='movie'>
        <img src={movie.image} alt={movie.sinopse} />
        <div className='details'>
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className='release-date'>
            Data de lançamento: {movie.releaseDate}
          </span>
          <Link to='/'>
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Details;

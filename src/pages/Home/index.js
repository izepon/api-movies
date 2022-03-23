import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { Movie } from '../../components/Movie/style';
import { MovieList } from '../../components/MovieList/style';
import { APIKey } from '../../config/key';

function Home() {
  const imagePath = 'https://image.tmdb.org/t/p/w500/';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`${imagePath}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Home;

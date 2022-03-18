import { Container, MovieList, Movie } from './styles';

function Home() {
  const movies = [
    {
      id: 1,
      title: 'Spider-man Homecoming',
      image_url:
        'https://images-na.ssl-images-amazon.com/images/I/81QpHLbctXL.jpg',
    },
    {
      id: 2,
      title: 'Spider-man Homecoming',
      image_url:
        'https://images-na.ssl-images-amazon.com/images/I/81QpHLbctXL.jpg',
    },
    {
      id: 3,
      title: 'Spider-man Homecoming',
      image_url:
        'https://images-na.ssl-images-amazon.com/images/I/81QpHLbctXL.jpg',
    },
    {
      id: 4,
      title: 'Spider-man Homecoming',
      image_url:
        'https://images-na.ssl-images-amazon.com/images/I/81QpHLbctXL.jpg',
    },
    {
      id: 5,
      title: 'Spider-man Homecoming',
      image_url:
        'https://images-na.ssl-images-amazon.com/images/I/81QpHLbctXL.jpg',
    },
    {
      id: 6,
      title: 'Spider-man Homecoming',
      image_url:
        'https://images-na.ssl-images-amazon.com/images/I/81QpHLbctXL.jpg',
    },
  ];

  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <a href='#'>
                <img src={movie.image_url} alt='Spider-man' />
              </a>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Home;

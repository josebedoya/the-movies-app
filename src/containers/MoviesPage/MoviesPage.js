import { useContext, useState, useEffect } from 'react';
import MovieItem from '../../components/MovieItem';
import { DataContext } from '../../context/DataContext';
import MovieDetail from './components/MovieDetail';

const MoviesPage = () => {
  const { movies, setMovies } = useContext(DataContext);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleDelete = payload => {
    const newMovies = movies.filter(movie => movie.title !== payload.title)
    setMovies(newMovies);
    localStorage.setItem('myMovies', JSON.stringify(newMovies));
  };

  useEffect(() => {
    setSelectedMovie(false);
  }, [movies])

  return (
    <div className='home'>
      <aside>
        {movies.map(movie => (
          <MovieItem
            key={movie.title}
            title={movie.title}
            release={movie.release}
            handleDelete={() => handleDelete(movie)}
            active={movie === selectedMovie}
            onClick={() => setSelectedMovie(movie)}
          />
        ))}
      </aside>
      <main>
        {selectedMovie && (
          <MovieDetail
            title={selectedMovie.title}
            release={selectedMovie.release}
            image={selectedMovie.image}
            description={selectedMovie.description}
          />
        )}
      </main>
    </div>
  );
};

export default MoviesPage;

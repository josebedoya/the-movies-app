import { useState, useEffect } from 'react';
import { fetchTop5Movies } from '../api';
import CardMovie from '../components/CardMovie';

const TopMoviesPage = () => {
  const [moviesTop5, setMoviesTop5] = useState([]);

  useEffect(() => {
    (async function getMovies() {
      setMoviesTop5(await fetchTop5Movies());
    })();
  }, []);

  if (moviesTop5.length === 0) return <div>Loading...</div>;
  return (
    <div className='top5'>
      <h1>Top 5 Movies</h1>
      <div className='moviesList'>
        {moviesTop5.map(movie => (
          <CardMovie
            key={movie.title}
            title={movie.title}
            release={movie.release}
            description={movie.description}
            image={movie.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TopMoviesPage;

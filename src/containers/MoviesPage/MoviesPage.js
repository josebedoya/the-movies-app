import { useContext, useState } from 'react';
import MovieItem from '../../components/MovieItem';
import { DataContext } from '../../context/DataContext';
import MovieDetail from './components/MovieDetail';

const MoviesPage = () => {
  const { movies } = useContext(DataContext);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleDelete = id => {
    console.log('deleted');
  };

  return (
    <div className='home'>
      <aside>
        {movies.map(movie => (
          <MovieItem
            key={movie.title}
            title={movie.title}
            release={movie.release}
            handleDelete={handleDelete}
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
            image='https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
            description="After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
          />
        )}
      </main>
    </div>
  );
};

export default MoviesPage;

import MovieItem from "../../components/MovieItem"

const MoviesPage = () => {
  const handleDelete = id => { console.log('deleted')}
  return (
    <div className='home'>
      <aside>
        <MovieItem title="Home Alone 2" release="09/08/1992" handleDelete={handleDelete} />
        <MovieItem title="Terminator" release="09/05/1992" handleDelete={handleDelete} />
        <MovieItem title="Life is Beautiful" release="09/05/1995" handleDelete={handleDelete} />
        <MovieItem title="Avengers End Game" release="09/08/1992" handleDelete={handleDelete} />
        <MovieItem title="The Joker" release="04/26/2018" handleDelete={handleDelete} />
      </aside>
      <main>

      </main>
    </div>
  );
};

export default MoviesPage;

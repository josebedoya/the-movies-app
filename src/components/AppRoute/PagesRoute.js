import { Switch } from 'react-router-dom';

import MainRoute from './MainRoute';
import MoviesPage from '../../containers/MoviesPage/MoviesPage';
import TopMoviesPage from '../../containers/TopMoviesPage';

export const PagesRoute = () => {
  return (
    <Switch>
      <MainRoute
        exact
        path='/'
        component={MoviesPage}
      />
      <MainRoute
        exact
        path='/top-movies'
        component={TopMoviesPage}
      />
    </Switch>
  );
};

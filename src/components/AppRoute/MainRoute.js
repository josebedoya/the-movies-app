import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';

const MainRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
};

MainRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
}

export default MainRoute;

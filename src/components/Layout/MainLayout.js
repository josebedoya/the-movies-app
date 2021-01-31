import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <main className="main-content">
        <div className="content-inner">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MainLayout;

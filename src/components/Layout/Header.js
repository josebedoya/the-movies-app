import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Drawer } from 'antd';
import MovieForm from '../../containers/MoviesPage/components/MovieForm';

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <header className='header'>
      <div className='header-inner'>
        <div className='logo'>The Movies App</div>
        <Menu>
          <Menu.Item key='1'>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='2' onClick={() => setShowDrawer(true)}>Add Movie</Menu.Item>
          <Menu.Item key='3'>
            <Link to='/top-movies'>Top 5</Link>
          </Menu.Item>
        </Menu>
        <Drawer
          title="Add a Movie"
          width={300}
          onClose={() => setShowDrawer(false)}
          destroyOnClose
          maskClosable={false}
          placement='right'
          visible={showDrawer}
        >
          <MovieForm closeDrawer={() => setShowDrawer(false)} />
        </Drawer>
      </div>
    </header>
  );
};

export default Header;

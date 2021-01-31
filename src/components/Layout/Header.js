import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-inner'>
        <div className='logo'>The Movies App</div>
        <Menu>
          <Menu.Item key='1'>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='2'>Add Movie</Menu.Item>
          <Menu.Item key='3'>
            <Link to='/top-movies'>Top 5</Link>
          </Menu.Item>
        </Menu>
      </div>
    </header>
  );
};

export default Header;

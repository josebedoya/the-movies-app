import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

const year = new Date().getFullYear();

const MainLayout = ({ children }) => {
  return (
    <Layout className='layout'>
      <Header>
        <Menu>
          <Menu.Item key='1'>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key='2'>Add Movie</Menu.Item>
          <Menu.Item key='3'>
            <Link to='/top-movies'>Top 5</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>{children}</Content>
      <Footer>The Movies App ©{year} | Jose Bedoya</Footer>
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MainLayout;

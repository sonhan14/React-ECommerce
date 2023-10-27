import { LoginOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';

const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart.cart)
  let totalItems = 0;
  cart.map((item) => {
    return (totalItems += item.quantity);
  });

  const menuItems = [
    {
      label: 'Home',
      key: '/',
      link: '/',
    },
    {
      label: 'About',
      key: 'about',
      link: '/about',
    },
    {
      label: 'Contact',
      key: 'contact',
      link: '/contact',
    },
    {
      label: 'Login',
      key: 'login',
      icon: <LoginOutlined />,
      link: '/login',
    },
    {
      label: 'Register',
      key: 'register',
      link: '/register',
    },
    {
      label: 'Cart (' + totalItems + ')',
      key: 'cart',
      link: '/cart',
    },
  ];

  return (
    <div className="" style={{marginBottom: 20}}>
      <Menu
        items={menuItems}
        mode="horizontal"
        defaultSelectedKeys={['home']}
        defaultOpenKeys={['sub1']}
        className="navbar-nav m-auto my-2 text-center"
        onClick={(item) => {
          //item.key
          navigate(item.key);
          if (item.key === 'login' || item.key === 'register') {
            window.location.reload()
          }
        }}
      // activeKey= {window.location.pathname}
      />
    </div>
  );
};

export default Navbar;
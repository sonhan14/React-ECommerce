import { LoginOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const menuItems = [
        {
            label: 'Home',
            key: '/',
            link: '/',
        },
        {
            label: 'Products',
            key: 'products',
            link: '/product',
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
    ];

    return (
        <div className="container">
            <Menu
                items={menuItems}
                mode="horizontal"
                defaultSelectedKeys={['home']}
                defaultOpenKeys={['sub1']}
                className="navbar-nav m-auto my-2 text-center"
                onClick={(item) => {
                    //item.key
                    navigate(item.key);
                    if(item.key === 'login' || item.key === 'register') {
                        window.location.reload()
                    }
                }}
                // activeKey= {window.location.pathname}
            />
        </div>
    );
};

export default Navbar;
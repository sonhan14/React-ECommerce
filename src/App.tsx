import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/Servicespage';
import BlogPage from './pages/Blogpage';
import LoginPage from './pages/Login';
import Register from './pages/Register';
import AboutPage from './pages/AboutPage';
import Navbar from './components/NavBar';
import CartPage from './pages/Cart';
import { Row } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import ProductDetail from './pages/ProductDetail';
import CheckOut from './pages/checkOut/CheckOut';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckOut />} />

      </Routes>
      <Footer className="mb-0 text-center">
        <Row style={{ alignItems: 'center', textAlign: 'center' }}>
          <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
            <Link target="_blank" rel="noreferrer" to={'https://www.pokernow.club/games/pglCWXqo0Us_Ecs0y3VG9nakZ?fbclid=IwAR07fR70K8l4eF5rtiu-pShclg9Ii3Be3nIh7Ln1skNfQoqTjRoKqpuSKN8'}>Poker team</Link>
          </p>
        </Row>
      </Footer>
    </BrowserRouter>
  );
}

export default App;

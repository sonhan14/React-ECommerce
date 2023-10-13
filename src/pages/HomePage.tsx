import React from "react";
import './../index.css';
import Products from "../components/Product";
const HomePage = () => {
  return (
    <>
      <div className="hero">
        <div className="card">
          <img className="card-img" src="./assets/main.png.jpg" alt="Card" />
          <div className="card-img-overlay">
            <div className="container">
              <h5 className="card-title">New Season Arrivals</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
      <Products/>
    </>
  );
};

export default HomePage;

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
          </div>
        </div>
      </div>
      <Products/>
    </>
  );
};

export default HomePage;

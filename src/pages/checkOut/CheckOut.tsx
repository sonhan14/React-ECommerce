import React, { useState, useEffect } from "react";
import "./checkOut.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  //   useEffect(() => {}, []);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/")
  }

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    cart.map((item) => {
      return (subtotal += item.price * item.quantity);
    });

    cart.map((item) => {
      return (totalItems += item.quantity);
    });

    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Checkout Form</h2>
        </div>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form>
                <div className="row">
                  <div className="col-50">
                    <div
                      style={{
                        background: "#F9B572",
                        padding: "0.25px",
                        width: "200px",
                        borderRadius: "10px",
                        marginLeft: "100px",
                      }}
                    >
                      <h3 style={{ display: "flex", justifyContent: "center" }}>
                        Billing Address
                      </h3>
                    </div>
                    <label>
                      <i className="fa fa-user"></i> Full Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="Nguyen Van A"
                    ></input>
                    <label>
                      <i className="fa fa-envelope"></i> Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="vanA@example.com"
                    ></input>
                    <label>
                      <i className="fa fa-address-card-o"></i> Address
                    </label>
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      placeholder="st120 Dinh Thon"
                    ></input>
                    <label>
                      <i className="fa fa-institution"></i> City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Ha Noi"
                    ></input>

                    <div className="row">
                      <div className="col-50">
                        <label>District</label>
                        <input
                          type="text"
                          id="district"
                          name="district"
                          placeholder="My Dinh"
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-50">
                    <div style={{paddingBottom: "10px"}}>
                      <div
                        style={{
                          background: "#F9B572",
                          padding: "0.25px",
                          width: "200px",
                          borderRadius: "10px",
                          marginLeft: "100px",
                        }}
                      >
                        <h3
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          Payment
                        </h3>
                      </div>
                    </div>

                    <label>Name on Card</label>
                    <input
                      type="text"
                      id="cname"
                      name="cardname"
                      placeholder="VietComBank"
                    ></input>
                    <label>Credit card number</label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                    ></input>
                    <label>Exp Month</label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      placeholder="December"
                    ></input>
                    <div className="row">
                      <div className="col-50">
                        <label>Exp Year</label>
                        <input
                          type="text"
                          id="expyear"
                          name="expyear"
                          placeholder="2027"
                        ></input>
                      </div>
                      <div className="col-50">
                        <label>CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  value="Submit CheckOut"
                  className="btn"
                  onClick={goToHome}
                ></input>
              </form>
            </div>
          </div>
          <div className="col-25">
            <div className="container">
              <div style={{ display: "flex", justifyContent: "center" ,background: "#F9B572", padding: '0.25px', width: "200px", borderRadius: "10px", marginLeft: "25px"}}>
                <h2>Price Summary</h2>
              </div>
              <div>
                <h4>
                  Total Cart:
                  <span className="price">
                    <span style={{color: "red", fontSize: 20}}>{totalItems}</span>
                  </span>
                </h4>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                Total Price:
                <span className="price">
                  <span style={{color: "#F90B00"}}>${Math.round(subtotal + shipping)} </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <ShowCart />
    </>
  );
};

export default CheckOut;

import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";

const product = {
  name: "Orange",
  images: [{url: "https://t3.ftcdn.net/jpg/02/01/79/54/360_F_201795443_a16jojvPRiobPC96uO7ePHSNzGVoBLbc.jpg"}],
  price: "৳100",
  _id: "faiza"
}

const Home = () => {
  return (
    <Fragment>
          <div className="banner">
            <p>Welcome to Grow Bangla</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            <Product product = {product} />
          </div>
        </Fragment>
      )
}

export default Home;
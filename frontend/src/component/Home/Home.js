import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";



const product = {
  name: "Orange",
  images: [{url: "https://t3.ftcdn.net/jpg/02/01/79/54/360_F_201795443_a16jojvPRiobPC96uO7ePHSNzGVoBLbc.jpg"}],
  price: "৳100",
  _id: "faiza"
}

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <MetaData title="Grow Bangla" />
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
            <Product product = {product} />
            <Product product = {product} />
            <Product product = {product} />

            <Product product = {product} />
            <Product product = {product} />
            <Product product = {product} />
            <Product product = {product} />
          </div>
        </Fragment>
      )
}

export default Home;
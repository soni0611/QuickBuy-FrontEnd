import React, { useEffect }  from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import MetaData from "../layout/MetaData.js";
import Loader from "../layout/Loader/Loader.js";
import { useSelector, useDispatch } from "react-redux";
import {  clearErrors,getProduct } from "../../redux/actions/productAction.js";
import { useAlert } from "react-alert";
// import Product from "./Product";
import ProductCard from "./ProductCard";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
 
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  // const product={
  //   name:"Blue Tshirt",
  //   images:[{url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1197827/2018/3/7/11520418139882-ETHER-Light-Blue-T-shirt-5521520418139565-1.jpg"}],
  //   price:"RS 3000",
  //   _id:"abhishek"
  // }

  

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Home | Ecommerce" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1> FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
              <button>
                
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading"> Featured Products</h2>
          <div className="container" id="container">
            {/* <Product product={product}/> */}
          
            {products &&
              products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;

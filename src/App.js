
import './App.css';
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import WebFont from "webfontloader";
import { Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import Home from './component/Home/Home.js';
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from './component/Product/Products';
import Search from './component/Product/Search';
import LoginSignup from './component/User/LoginSignup';
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
   
  }, []);
  return (<>
     <Header/> 
     <Routes>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/product/:id" element={<ProductDetails />} />
     <Route exact path="/products" element={<Products />} />
     <Route path="/products/:keyword" element={<Products />} />
     <Route exact path="/Search" element={<Search />} />
     <Route exact path="/login" element={<LoginSignup />} />
     </Routes>
     <Footer /></>
  );
}

export default App;

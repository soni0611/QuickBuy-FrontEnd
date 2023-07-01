
import './App.css';
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import WebFont from "webfontloader";
import { Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import Home from './component/Home/Home.js';
import ProductDetails from "./component/Product/ProductDetails.js";
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
     </Routes>
     <Footer /></>
  );
}

export default App;

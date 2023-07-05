import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import WebFont from "webfontloader";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignup from "./component/User/LoginSignup";
import  { server } from "./redux/store";
import { loadUser } from "./redux/actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector,useDispatch } from "react-redux";
import NotFound from "./component/layout/NotFound/NotFound";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import OrderSuccess from "./component/Cart/OrderSuccess";
import OrderFail from "./component/Cart/OrderFail";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Canva from "./component/Product/Canva";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./component/Cart/Payment";
import Dashboard from "./component/Admin/Dashboard";
function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get(`${server}/stripeapikey`,{
      withCredentials: true });

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
   
  }, []);
  
  useEffect(() => {
    dispatch(loadUser());
    getStripeApiKey();
  }, [dispatch]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     getStripeApiKey();
  //   }
  // }, [isAuthenticated]);
  // window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
      <Route exact path="/canva" element={<Canva />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/Search" element={<Search />} />
        <Route exact path="/login" element={<LoginSignup />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" exact={true} element={<NotFound />} />
        <Route
          exact
          path="/account"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
<Route
          exact
          path="/me/update"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/password/update"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UpdatePassword />
            </ProtectedRoute>
          }
        />
         <Route exact path="/password/forgot" element={<ForgotPassword />} />
         <Route
          exact
          path="password/reset/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/shipping"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Shipping />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/order/confirm"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ConfirmOrder />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/success"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/fail"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <OrderFail />
              </ProtectedRoute>
          }
        />
         <Route
          exact
          path="/orders"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/order/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <OrderDetails />
            </ProtectedRoute>
          }
        />
        {stripeApiKey && (
          <Route
            exact
            path="/process/payment"
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Payment />
                </ProtectedRoute>
              </Elements>
            }
          />
        )}

 {/* Admin Routes */}
<Route
          exact
          path="/admin/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

         {/* Another Way to have Protected Routes
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}></ProtectedRoute>}>
          <Route path="/account" element={<Profile/>}/>
          <Route path="/order/confirm" element={<ConfirmOrder/>}/>
          </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

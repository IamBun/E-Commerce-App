import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from ".//page/HomePage";
import Layout from "./components/layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { dataActions } from "./store/data";
import LoadingSpinner from "./components/UI/LoadingSpinner";

//Lazy Load
const ShopPage = React.lazy(() => import(".//page/ShopPage"));
const CheckoutPage = React.lazy(() => import(".//page/CheckoutPage"));
const LoginPage = React.lazy(() => import(".//page/LoginPage"));
const RegisterPage = React.lazy(() => import(".//page/RegisterPage"));
const CartPage = React.lazy(() => import(".//page/CartPage"));
const DetailPage = React.lazy(() => import(".//page/DetailPage"));

function App() {
  const dispatch = useDispatch();
  const getProducts = async function () {
    try {
      const res = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );

      if (!res.ok) {
        throw new Error("Loading failed !");
      }

      const data = await res.json();
      dispatch(dataActions.getData(data));
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Layout>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "100px auto",
              }}
            >
              <LoadingSpinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/shop" element={<ShopPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/checkout" element={<CheckoutPage />}></Route>
            <Route path="/detail/:productId" element={<DetailPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="*" element={<HomePage />}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;

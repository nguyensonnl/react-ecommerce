import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/clients/Home";
import LoginPage from "./pages/admin/components/Auth/LoginPage";
import RegisterPage from "./pages/admin/components/Auth/RegisterPage";
//import AdminPage from "./pages/admin/pages/AdminPage";
import Layout from "./pages/admin/components/Layout";
import CreateUser from "./pages/admin/components/User/CreateUser";

import { publicRoutes } from "./routes";
import DefaultLayout from "./components/DefaultLayout";
import { Fragment, useState } from "react";
import Product from "./pages/admin/components/Product";
import Order from "./pages/admin/components/Order";
import Dashboard from "./pages/admin/components/Dashboard";

import "react-toastify/dist/ReactToastify.css";
import LoginPageAdmin from "./pages/admin/components/Auth/LoginPageAdmin";
import Category from "./pages/admin/components/Category";
import Brand from "./pages/admin/components/Brand";

import ProductAdd from "./pages/admin/components/Product/ProductAdd";
import ProductUpdate from "./pages/admin/components/Product/ProductUpdate";

import Text from "./components/Text";
import Pratice from "./components/Pratice";

import Protected from "./pages/admin/Protected";
import { ProtectedLogin } from "./pages/admin/Protected";
import { useSelector } from "react-redux";
import { ProtectedAccount } from "./components/ProtectedAcount";
import PrivateRoute from "./components/PrivateRoute";
import { ProtectedAccountLogin } from "./components/ProtectedAcount";
import User from "./pages/admin/components/User";
import OrderDetail from "./pages/admin/components/Order/OrderDetail";

import Update from "./components/Update";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const customer = useSelector((state) => state.customer);
  const isLoggedInClient = customer?.isLoggedIn;
  const cart = useSelector((state) => state.cart.cartItems);

  const [isUpdated, setIsUpdated] = useState(false);

  return (
    <>
      <ToastContainer />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        {isUpdated && (
          <>
            <Route path="/" element={<Update />} />
            <Route path="*" element={<Update />} />
          </>
        )}

        {!isUpdated && (
          <>
            {/*Admin*/}
            <Route
              path="/auth/login"
              element={
                <ProtectedLogin isLoggedIn={isLoggedIn}>
                  <LoginPageAdmin />
                </ProtectedLogin>
              }
            />
            <Route path="/admin/register" element={<RegisterPage />} />
            <Route
              path="/admin"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <Dashboard />
                </Protected>
              }
            />

            <Route path="/admin/user" element={<User />} />
            <Route path="/admin/user/create" element={<CreateUser />} />

            <Route path="/admin/product" element={<Product />} />
            <Route path="/admin/product/add" element={<ProductAdd />} />
            <Route path="/admin/product/:id" element={<ProductUpdate />} />

            <Route path="/admin/order" element={<Order />} />
            <Route path="/admin/order/detail/:id" element={<OrderDetail />} />

            <Route path="/admin/category/" element={<Category />} />

            <Route path="/admin/brand" element={<Brand />} />

            <Route path="/pratice" element={<Pratice />} />

            {/*Client*/}
            {publicRoutes.map((route, index) => {
              const Page = route.page;
              const Layout = route.layout === null ? Fragment : DefaultLayout;

              return (
                <Route
                  key={index}
                  path={route.path}
                  // element={
                  //   <Layout>
                  //     <Page />
                  //   </Layout>
                  // }

                  element={
                    route.private && !isLoggedInClient ? (
                      <Navigate to="/account/login" replace />
                    ) : !route.private &&
                      isLoggedInClient &&
                      route.path === "/account/login" ? (
                      <Navigate to="/account" replace />
                    ) : !route.private &&
                      isLoggedInClient &&
                      route.path === "/account/register" ? (
                      <Navigate to="/account" replace />
                    ) : (
                      <Layout>
                        <Page />
                      </Layout>
                    )
                  }
                />
              );
            })}
          </>
        )}
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/clients/Home";
import LoginPage from "./pages/admin/components/Auth/LoginPage";
import RegisterPage from "./pages/admin/components/Auth/RegisterPage";
//import AdminPage from "./pages/admin/pages/AdminPage";
import Layout from "./pages/admin/components/Layout";
import CreateUser from "./pages/admin/components/User/CreateUser";

import { publicRoutes } from "./routes";
import DefaultLayout from "./components/DefaultLayout";
import { Fragment } from "react";
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

function App() {
  return (
    // <div className="App">
    <>
      <ToastContainer />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/auth/login" element={<LoginPageAdmin />} />
        <Route path="/admin/register" element={<RegisterPage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/user/create" element={<CreateUser />} />

        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/product/add" element={<ProductAdd />} />
        <Route path="/admin/product/:id" element={<ProductUpdate />} />
        <Route path="/admin/order" element={<Order />} />

        <Route path="/admin/category" element={<Category />} />

        <Route path="/admin/brand" element={<Brand />} />
        <Route path="/text" element={<Text />} />

        {publicRoutes.map((route, index) => {
          const Page = route.page;
          const Layout = route.layout === null ? Fragment : DefaultLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </>

    // </div>
  );
}

export default App;

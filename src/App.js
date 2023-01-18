import { Routes, Route } from "react-router-dom";
import Home from "./pages/clients/Home";
import LoginPage from "./pages/admin/pages/Auth/LoginPage";
import RegisterPage from "./pages/admin/pages/Auth/RegisterPage";
import AdminPage from "./pages/admin/pages/AdminPage";
import Layout from "./pages/admin/components/Layout";
import CreateUser from "./pages/admin/pages/User/CreateUser";

import { publicRoutes } from "./routes";
import DefaultLayout from "./components/DefaultLayout";
import { Fragment } from "react";
import Product from "./pages/admin/pages/Product";
import Order from "./pages/admin/pages/Order";
import Dashboard from "./pages/admin/pages/Dashboard";
import Add from "./pages/admin/components/Product/Add";

function App() {
  return (
    // <div className="App">
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/admin/login" element={<LoginPage />} />
      <Route path="/admin/register" element={<RegisterPage />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/user/create" element={<CreateUser />} />

      <Route path="/admin/product" element={<Product />} />
      <Route path="/admin/product/add" element={<Add />} />
      <Route path="/admin/order" element={<Order />} />

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
    // </div>
  );
}

export default App;

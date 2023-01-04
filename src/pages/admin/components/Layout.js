import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;

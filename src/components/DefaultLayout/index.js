import React from "react";
import Grid from "../Grid";
import Footer from "./Footer";
import Header from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

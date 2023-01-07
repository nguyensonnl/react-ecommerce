import React from "react";
import Grid from "../Grid";
import Footer from "./Footer";
import Header from "./Header";
import Letter from "./Letter";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
      <Letter />
      <Footer />
    </div>
  );
};

export default DefaultLayout;

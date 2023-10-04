import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;

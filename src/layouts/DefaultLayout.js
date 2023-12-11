import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mb-20">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;

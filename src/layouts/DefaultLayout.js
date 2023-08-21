import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <SubHeader />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;

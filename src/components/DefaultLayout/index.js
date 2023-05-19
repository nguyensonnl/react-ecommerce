import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SubHeader from "./SubHeader";

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

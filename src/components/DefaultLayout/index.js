import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Letter from "./Letter";
import SubHeader from "./SubHeader";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <SubHeader />
      <div className="container grid">{children}</div>
      <Letter />
      <Footer />
    </>
  );
};

export default DefaultLayout;

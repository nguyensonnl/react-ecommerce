import React from "react";
import Grid from "../Grid";
import Footer from "./Footer";
import Header from "./Header";
import Letter from "./Letter";
import SubHeader from "./SubHeader";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <SubHeader />
      <div className="">{children}</div>
      <Letter />
      <Footer />
    </div>
  );
};

export default DefaultLayout;

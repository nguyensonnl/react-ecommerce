import React from "react";
import Row from "../../../../components/Row";
import Col from "../../../../components/Col";
import Sidebar from "../../components/Sidebar/";
import Header from "../../components/Header/";
import "./Layout.scss";

const Layout = (props) => {
  return (
    <div className="admin">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Header />
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;

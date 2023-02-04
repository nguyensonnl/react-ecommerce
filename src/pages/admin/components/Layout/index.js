import React from "react";
import Row from "../../../../components/Row";
import Col from "../../../../components/Col";
import Sidebar from "../../components/Sidebar/";
import Header from "../../components/Header/";
import "./Layout.scss";

const Layout = (props) => {
  return (
    <div className="admin">
      <Header />
      <Row>
        <Col col={2}>
          <Sidebar />
        </Col>
        <Col col={10}>
          <div className="content">{props.children}</div>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;

import React from "react";
import Layout from "../Layout";
import "./Category.scss";
import Col from "../../../../components/Col";
import Row from "../../../../components/Row";
import CreateCategory from "./CreateCategory";
import ListCategory from "./ListCategory";

const Category = () => {
  return (
    <Layout>
      <div className="admin__category">
        <h2 className="category__title">Danh mục sản phẩm</h2>
        <Row>
          <Col col={6}>
            <CreateCategory />
          </Col>
          <Col col={6}>
            <ListCategory />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Category;

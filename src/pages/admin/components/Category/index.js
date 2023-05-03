import React from "react";
import Layout from "../Layout";
import "./Category.scss";
import CreateCategory from "./CreateCategory";
import ListCategory from "./ListCategory";

const Category = () => {
  return (
    <Layout>
      <div className="admin__category">
        <h2 className="category__title">Danh mục sản phẩm</h2>
        <div className="row">
          <div className="col-6">
            <CreateCategory />
          </div>
          <div className="col-6">
            <ListCategory />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;

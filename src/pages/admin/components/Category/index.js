import React from "react";
import Layout from "../Layout";
import "./Category.scss";
import CreateCategory from "./CreateCategory";
import ListCategory from "./ListCategory";

const Category = () => {
  return (
    <Layout>
      <div className="admin__category" style={{ margin: "0 auto" }}>
        <div className="item__header">
          <h2>DANH MỤC SẢN PHẨM</h2>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-9">
            <CreateCategory />
          </div>
          <div className="col-9">
            <ListCategory />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;

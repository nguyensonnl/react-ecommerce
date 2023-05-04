import React from "react";
import Layout from "../Layout";
import AddBrand from "./AddBrand";

const Brand = () => {
  return (
    <Layout>
      <div className="admin__brand">
        <div className="row">
          <div className="col-6">
            <AddBrand />
          </div>
          <div className="col-6">fsdf</div>
        </div>
      </div>
    </Layout>
  );
};

export default Brand;

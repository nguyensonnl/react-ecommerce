import React from "react";
import Grid from "../../../components/Grid";
import Helmet from "../../../components/Helmet";
import ProductView from "../../../components/ProductView";

const Product = () => {
  return (
    <Helmet title="Sản phẩm">
      <Grid>
        <ProductView />
      </Grid>
    </Helmet>
  );
};

export default Product;

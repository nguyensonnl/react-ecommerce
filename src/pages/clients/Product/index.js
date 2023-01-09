import React from "react";
import Grid from "../../../components/Grid";
import Helmet from "../../../components/Helmet";
import ProductView from "../../../components/ProductView";
import ProductCard from "../../../components/ProductCard";
import Section, {
  SectionBody,
  SectionTitle,
} from "../../../components/Section";

const Product = () => {
  return (
    <Helmet title="Sản phẩm">
      <Grid>
        <ProductView />

        <Section>
          <SectionTitle>Sản phẩm liên quan</SectionTitle>
          <SectionBody>
            <ProductCard />
          </SectionBody>
        </Section>
      </Grid>
    </Helmet>
  );
};

export default Product;

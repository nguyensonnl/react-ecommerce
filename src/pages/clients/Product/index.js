import React, { useEffect } from "react";
import Grid from "../../../components/Grid";
import Helmet from "../../../components/Helmet";
import ProductView from "../../../components/ProductView";
import ProductCard from "../../../components/ProductCard";
import Section, {
  SectionBody,
  SectionTitle,
} from "../../../components/Section";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../../redux/reducers/productSlice";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductById(id));
  }, []);
  const productById = useSelector((state) => state.product.productById);
  const dispatch = useDispatch();

  return (
    <Helmet title="Sản phẩm">
      <Grid>
        <ProductView product={productById} />

        {/* <Section>
          <SectionTitle>Sản phẩm liên quan</SectionTitle>
          <SectionBody>
            <ProductCard />
          </SectionBody>
        </Section> */}
      </Grid>
    </Helmet>
  );
};

export default Product;

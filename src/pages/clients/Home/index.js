import React, { useEffect, useState } from "react";
import HeroSlider from "../../../components/HeroSlider";
import Grid from "../../../components/Grid";
import Feature from "../../../components/Feature";
import ProductCard from "../../../components/ProductCard";
import Banner from "../../../components/Banner";
import Helmet from "../../../components/Helmet";
import Section, {
  SectionBody,
  SectionTitle,
} from "../../../components/Section";
import productApi from "../../../api/productApi";

import Text from "../../../components/Text";
import Row from "../../../components/Row";
import Col from "../../../components/Col";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const res = await productApi.getProductFeatured(5);
    setProducts(res.data);
  }, []);
  return (
    <Helmet title="Trang chủ">
      <HeroSlider />
      <Grid>
        <Section>
          <SectionBody>
            <Feature />
          </SectionBody>
        </Section>

        <Section>
          <SectionTitle>Sản phẩm nổi bật</SectionTitle>
          <SectionBody>
            <ProductCard />
          </SectionBody>
        </Section>
      </Grid>

      <Section>
        <SectionBody>
          <Banner />
        </SectionBody>
      </Section>

      <Grid>
        <Section>
          <SectionTitle>Sản phẩm mới</SectionTitle>
          <SectionBody>
            <Row>
              {products.map((item, index) => (
                <Col col={`${12}-${5}`}>
                  <ProductCard
                    key={index}
                    src={item.image}
                    brand={item.brand}
                    name={item.name}
                    price={item.price.toLocaleString()}
                  />
                </Col>
              ))}
            </Row>
          </SectionBody>
        </Section>
      </Grid>
    </Helmet>
  );
};

export default Home;

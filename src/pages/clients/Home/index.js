import React from "react";
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

const Home = () => {
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
            <ProductCard />
          </SectionBody>
        </Section>
      </Grid>
    </Helmet>
  );
};

export default Home;

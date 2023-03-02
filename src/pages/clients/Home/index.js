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
import { getAllProduct } from "../../../redux/reducers/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Home.scss";

const Home = () => {
  const [productsFeatured, setProductsFeatured] = useState([]);
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.product.products);

  useEffect(async () => {
    const res = await productApi.getProductFeatured(5);
    setProductsFeatured(res.data);
  }, []);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Helmet title="Đồng Hồ Bảo Thanh">
      <HeroSlider />
      <Grid>
        <Section>
          <SectionBody>
            <Feature />
          </SectionBody>
        </Section>

        <Section>
          <SectionTitle>Sản phẩm nổi bật</SectionTitle>
          <SectionBody className="product__list">
            <Carousel responsive={responsive}>
              {productsFeatured.map((item, index) => (
                <ProductCard
                  id={item._id}
                  key={index}
                  src={item.image}
                  brand={item.brand}
                  name={item.name}
                  price={item.price.toLocaleString()}
                />
              ))}
            </Carousel>
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
          <SectionBody className="product__list">
            <Carousel responsive={responsive}>
              {allProduct.map((item, index) => (
                <ProductCard
                  id={item._id}
                  key={index}
                  src={item.image}
                  brand={item.brand}
                  name={item.name}
                  price={item.price.toLocaleString()}
                />
              ))}
            </Carousel>
          </SectionBody>
        </Section>
      </Grid>
    </Helmet>
  );
};

export default Home;

import React from "react";
import Hero from "../../../components/Hero";
import Grid from "../../../components/Grid";
import Feature from "../../../components/Feature";
import "./Home.scss";
import Card from "../../../components/Card";
import Banner from "../../../components/Banner";
import Helmet from "../../../components/Helmet";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <Hero />
      <Grid>
        <div className="container">
          <Feature />
          <div className="featured-products">
            <h2>Sản phẩm nổi bật</h2>
            <p>Bộ sưu tập Mùa Hè Thiết Kế Hiện Đại</p>
          </div>
          <Card />
        </div>
      </Grid>
      <Banner />
      <div className="featured-products">
        <h2>Hàng mới về</h2>
        <p>Bộ sưu tập Mùa Hè Thiết Kế Hiện Đại</p>
      </div>
      <Grid>
        <Card />
      </Grid>
    </Helmet>
  );
};

export default Home;

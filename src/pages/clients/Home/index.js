import React from "react";
import Hero from "../../../components/Hero";
import Grid from "../../../components/Grid";
import Feature from "../../../components/Feature";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Grid>
        <div className="container">
          <Feature />
          <div className="featured-products">
            <h2>Sản phẩm nổi bật</h2>
            <p>Bộ sưu tập Mùa Hè Thiết Kế Hiện Đại</p>
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Col from "../Col";
import Row from "../Row";
import "./Hero.scss";

import slider1 from "../../assets/img/Slider/slider_1.png";
import slider2 from "../../assets/img/Slider/slider_2.png";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss"; // additional import for navigation module
import "swiper/components/effect-fade/effect-fade.scss"; // import styling for fade effect
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper"; // added navigation and replaced EffectCoverflow with EffectFade
SwiperCore.use([Navigation, Pagination, EffectFade]); // configure the new modules as needed

const categories = [
  { name: "Trang chủ" },
  { name: "Thương hiệu" },
  { name: "Sản phẩm nổi bật" },
  { name: "Sản phẩm bán chạy" },
  { name: "Đồng hồ nam" },
  { name: "Đồng hồ nữ" },
  { name: "Đồng hồ đôi" },
  { name: "Đồng hồ cơ" },
  { name: "Đồng hồ pin" },
  { name: "Đồng hồ dây da" },
  { name: "Đồng hồ dây thép" },
  { name: "Phụ kiện đồng hồ" },
  { name: "Giới thiệu" },
  { name: "Liên hệ" },
];

const HeroSlider = () => {
  return (
    <div className="slider grid">
      <Row>
        <Col col={3}>
          <ul className="slider__category scroll">
            {categories.map((item, index) => (
              <li className="slider__category-item" key={index}>
                <Link to="" className="slider__category-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col col={9}>
          <div className="hero-slider">
            <Swiper
              effect="fade"
              loop="true"
              navigation
              pagination={{ clickable: true, dynamicBullets: true }}
              fadeEffect={{
                crossFade: true, // enables slides to cross fade
              }}
              autoplay={{
                delay: 5000,
              }}
            >
              <SwiperSlide>
                <img src={slider1} alt="slider1" className="hero-slider__img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider2} alt="slider2" className="hero-slider__img" />
              </SwiperSlide>
            </Swiper>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSlider;

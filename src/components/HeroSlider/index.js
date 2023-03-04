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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCateogry } from "../../redux/categorySlice";
SwiperCore.use([Navigation, Pagination, EffectFade]); // configure the new modules as needed

const HeroSlider = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(getAllCateogry());
  }, []);

  return (
    <div className="slider grid">
      <Row>
        <Col col={3}>
          <ul className="slider__category scroll">
            <li className="slider__category-item">
              <Link to="/" className="slider__category-link">
                Trang chủ
              </Link>
            </li>
            {categories.map((item, index) => (
              <li className="slider__category-item" key={index}>
                <Link
                  to={`/catalog/${item._id}`}
                  className="slider__category-link"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="slider__category-item">
              <Link to="/about" className="slider__category-link">
                Giới thiệu
              </Link>
            </li>
            <li className="slider__category-item">
              <Link to="/contact" className="slider__category-link">
                Liên hệ
              </Link>
            </li>
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

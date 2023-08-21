import slider3 from "../assets/img/Slider/dong-ho-t56.jpg";
import slider1 from "../assets/img/Slider/slider3.png";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
SwiperCore.use([Navigation, Pagination, EffectFade]);

const HeroSlider = () => {
  return (
    <div className="hero-slider">
      <Swiper
        effect="fade"
        loop="true"
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 5000,
        }}
      >
        <SwiperSlide>
          <img src={slider3} alt="slider1" className="hero-slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="slider2" className="hero-slider__img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;

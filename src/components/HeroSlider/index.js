import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";
import slider1 from "../../assets/img/Slider/slider_1.png";
import slider2 from "../../assets/img/Slider/slider_2.png";
import icon1 from "../../assets/img/Menu/menu_icon_1.png";
import icon2 from "../../assets/img/Menu/menu_icon_2.png";
import icon3 from "../../assets/img/Menu/menu_icon_3.png";
import icon4 from "../../assets/img/Menu/menu_icon_4.png";
import icon5 from "../../assets/img/Menu/menu_icon_5.png";
import icon6 from "../../assets/img/Menu/menu_icon_6.png";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
import LoadingSkeleton from "../Skeleton";
import productApi from "../../api/productApi";
import LoadingSpinner from "../LoadingSpinner";
SwiperCore.use([Navigation, Pagination, EffectFade]);

const HeroSlider = () => {
  const [listCate, setListCate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await productApi.getCategory();
      setListCate(res.data);
      setIsLoading(true);
    };
    fetchData();
  }, []);

  return (
    <div className="row slide">
      <div className="col-3 hide-on-mobile">
        {isLoading && (
          <ul className="nav__list scroll">
            <li className="nav__item">
              <Link to="/" className="nav__item-link">
                <img src={icon1} alt="icon-home" className="nav__item-icon" />
                Trang chủ
              </Link>
            </li>

            {listCate.map((item) => (
              <li className="nav__item" key={item._id}>
                <Link to={`/danh-muc/${item._id}`} className="nav__item-link">
                  <img src={icon2} alt="icon-home" className="nav__item-icon" />
                  {item.name}
                </Link>
              </li>
            ))}

            <li className="nav__item">
              <Link to="/about" className="nav__item-link">
                <img src={icon5} alt="icon-home" className="nav__item-icon" />
                Giới thiệu
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__item-link">
                <img src={icon6} alt="icon-home" className="nav__item-icon" />
                Liên hệ
              </Link>
            </li>
          </ul>
        )}
        {!isLoading && <LoadingSpinner />}
      </div>

      <div className="col-9 width-mobile">
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
      </div>
    </div>
  );
};

export default HeroSlider;

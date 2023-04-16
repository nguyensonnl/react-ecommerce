import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCateogry } from "../../redux/categorySlice";
import slider1 from "../../assets/img/Slider/slider_1.png";
import slider2 from "../../assets/img/Slider/slider_2.png";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
SwiperCore.use([Navigation, Pagination, EffectFade]);

const HeroSlider = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(getAllCateogry());
  }, []);

  return (
    <div className="row section_slide">
      <div className="col-3">
        <ul className="navigation__list scroll">
          <li className="navigation__list-item">
            <Link to="/" className="navigation__list-link">
              Trang chủ
            </Link>
          </li>
          <li className="menu-item navigation__list-item">
            <Link to="/" className="navigation__list-link">
              Thương hiệu
            </Link>
            <div className="submenu">
              <ul className="submenu__list">
                <li className="submenu__list-item">
                  <Link to="" className="submenu__list-link">
                    Đồng hồ Lobinni
                  </Link>
                </li>
                <li className="submenu__list-item">
                  <Link to="" className="submenu__list-link">
                    Đồng hồ Teintop
                  </Link>
                </li>
                <li className="submenu__list-item">
                  <Link to="" className="submenu__list-link">
                    Đồng hồ Aouke
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="navigation__list-item">
            <Link to="/" className="navigation__list-link">
              Sản phẩm nổi bật
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link to="/" className="navigation__list-link">
              Sản phẩm bán chạy
            </Link>
          </li>
          {categories.map((item, index) => (
            <li className="navigation__list-item" key={index}>
              <Link
                to={`/danh-muc/${item._id}`}
                className="navigation__list-link"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="navigation__list-item">
            <Link to="/" className="navigation__list-link">
              Đồng hồ cơ
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link to="/" className="navigation__list-link">
              Đồng hồ pin
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link to="/about" className="navigation__list-link">
              Đồng hồ dây da
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link to="/contact" className="navigation__list-link">
              Liên hệ
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-9">
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

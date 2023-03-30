import React from "react";
import "./Banner.scss";
import PropTypes from "prop-types";
import maleWatch from "../../assets/img/banner/dong-ho-nam.jpg";

const Banner = (src) => {
  return (
    <section className="banner grid">
      <img src={src.src} alt="Banner" className="banner__img" />
    </section>
  );
};

export default Banner;

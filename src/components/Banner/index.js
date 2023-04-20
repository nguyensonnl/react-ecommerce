import React from "react";
import "./Banner.scss";

const Banner = (src) => {
  return (
    <section className="banner grid">
      <img src={src.src} alt="Banner" className="banner__img" />
    </section>
  );
};

export default Banner;

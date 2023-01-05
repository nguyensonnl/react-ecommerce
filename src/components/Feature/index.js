import React from "react";
import "./Feature.scss";
import f1 from "../../assets/img/features/f1.png";
import f2 from "../../assets/img/features/f2.png";
import f3 from "../../assets/img/features/f3.png";
import f4 from "../../assets/img/features/f4.png";
import f5 from "../../assets/img/features/f5.png";
import f6 from "../../assets/img/features/f6.png";

const Feature = () => {
  return (
    <section className="feature">
      <div className="feature__card">
        <img src={f1} alt="" className="feature__img" />
        <div className="feature__title">Miễn phí vận chuyển</div>
      </div>
      <div className="feature__card">
        <img src={f2} alt="" className="feature__img" />
        <div className="feature__title">Đặt hàng trực tuyến</div>
      </div>
      <div className="feature__card">
        <img src={f3} alt="" className="feature__img" />
        <div className="feature__title">Tiết kiệm tiền</div>
      </div>
      <div className="feature__card">
        <img src={f4} alt="" className="feature__img" />
        <div className="feature__title">Khuyễn mãi</div>
      </div>
      <div className="feature__card">
        <img src={f5} alt="" className="feature__img" />
        <div className="feature__title">Bán vui vẻ</div>
      </div>
      <div className="feature__card">
        <img src={f6} alt="" className="feature__img" />
        <div className="feature__title">Hỗ trợ 24/7</div>
      </div>
    </section>
  );
};

export default Feature;

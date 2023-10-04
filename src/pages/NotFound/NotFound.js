import React from "react";
import showImg from "../../assets/img/404.jpg";
import { useNavigate } from "react-router-dom";
import Helmet from "../../components/Helmet";
import "./NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <Helmet title="404 Không tìm thấy trang">
      <div className="page-404">
        <img src={showImg} alt="page 404" className="page-404__img" />
        <p className="page-404__title">Trang không được tìm thấy</p>
        <p className="page-404__home">
          Thật tiếc! Trang của bạn yêu cầu không tồn tại.
          <br />
          Vui lòng thử với một trang khác hoặc liên hệ để được hỗ trợ nhé!
        </p>
        <button className="page-404__btn" onClick={() => handleBackHome()}>
          Về trang chủ
        </button>
      </div>
    </Helmet>
  );
};

export default NotFound;

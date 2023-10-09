import React from "react";
import cart_empty from "../../../assets/img/empty_cart.png";
import { useNavigate } from "react-router-dom";

const CartEmpty = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="cart__empty">
      <img src={cart_empty} alt="empty cart" className="cart__img" />
      <p className="cart__title">Giỏ hàng trống</p>
      <p className="cart__home">
        Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!
      </p>
      <button className="cart__btn" onClick={() => handleBackHome()}>
        Mua sắm ngay
      </button>
    </div>
  );
};

export default CartEmpty;

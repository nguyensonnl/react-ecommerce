import React, { useEffect } from "react";
import "./Cart.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "../../../components/Helmet";
import CartItem from "../../../components/CartItem.js";
import Breadcrumb from "../../../components/Breadcrumb";
import cart_empty from "../../../assets/img/cart_empty_background.png";
import { getTotals } from "../../../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleBackHome = () => {
    navigate("/");
  };
  return (
    <Helmet title="Giỏ hàng">
      <div className="grid">
        <Breadcrumb title="Giỏ hàng" />

        <div className="cart section-m1">
          {cart.cartItems.length === 0 ? (
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
          ) : (
            <>
              <h3 className="cart__header">Giỏ hàng</h3>
              <div className="row">
                <div className="col-8">
                  <div className="cart__list">
                    {cart.cartItems &&
                      cart.cartItems.length > 0 &&
                      cart.cartItems.map((item, index) => (
                        <CartItem item={item} index={index} />
                      ))}
                  </div>
                </div>
                <div className="col-4">
                  <div className="cart__checkout">
                    <div className="cart__info">
                      <div className="cart__info__title">
                        <p>
                          Bạn đang có <span>{cart.cartTotalQuantity}</span> sản
                          phẩm trong giỏ hàng
                        </p>
                        <div className="cart__info__title-price">
                          <span>Tổng cộng</span>
                          <span>
                            {cart.cartTotalAmount.toLocaleString()}
                            <sup>đ</sup>
                          </span>
                        </div>
                      </div>
                      <div className="cart__info__btn">
                        <Link to="/checkout">
                          <button type="button">Thanh toán</button>
                        </Link>

                        <Link to="/">
                          <button type="button">Tiếp tục mua hàng</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;

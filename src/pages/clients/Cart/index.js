import React, { useEffect } from "react";
import Helmet from "../../../components/Helmet";
import Grid from "../../../components/Grid";
import "./Cart.scss";
import CartItem from "../../../components/CartItem.js";
import Col from "../../../components/Col";
import Row from "../../../components/Row";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import cart_empty from "../../../assets/img/cart_empty_background.png";
import { getTotals } from "../../../redux/cartSlice";
import Breadcrumb from "../../../components/Breadcrumb";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };
  return (
    <Helmet title="Giỏ hàng">
      <Grid>
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
              <Row>
                <Col col={8}>
                  <div className="cart__list">
                    {cart.cartItems &&
                      cart.cartItems.length > 0 &&
                      cart.cartItems.map((item, index) => (
                        <CartItem item={item} index={index} />
                      ))}
                  </div>
                </Col>
                <Col col={4}>
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

                        <Link to="/catalog">
                          <button type="button">Tiếp tục mua hàng</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </div>
      </Grid>
    </Helmet>
  );
};

export default Cart;

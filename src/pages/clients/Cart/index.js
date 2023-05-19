import React, { useEffect } from "react";
import "./Cart.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "../../../components/Helmet";
import CartItem from "../../../components/CartItem.js";
import Breadcrumb from "../../../components/Breadcrumb";
import cart_empty from "../../../assets/img/cart_empty_background.png";
import { getTotals } from "../../../redux/cartSlice";
import { numberFormat } from "../../../utils/numberFormat";

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

  const apiUrl = process.env.REACT_APP_BASE_URL;
  return (
    <Helmet title="Giỏ hàng">
      <div className="grid">
        {/* <div className="cart section-m1">
          {cart.cartItems.length === 0 && (
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
          )}

          {cart.cartItems.length > 0 && (
            <>
              <h3 className="cart__header">Giỏ hàng</h3>
              <div className="row">
                <div className="col-8 col-c-12">
                  <div className="cart__list">
                    {cart.cartItems &&
                      cart.cartItems.length > 0 &&
                      cart.cartItems.map((item, index) => (
                        <CartItem item={item} index={index} />
                      ))}
                  </div>
                </div>
                <div className="col-4 col-c-12">
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
        </div> */}

        <div className="cart">
          {cart.cartItems.length === 0 && (
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
          )}

          {cart.cartItems.length > 0 && (
            <>
              <div className="cart__header">
                <Link to="/" className="cart__header-link">
                  Mua thêm sản phẩm khác
                </Link>
                <div>Giỏ hàng</div>
              </div>

              <div className="cart__content">
                {cart.cartItems &&
                  cart.cartItems.length > 0 &&
                  cart.cartItems.map((item, index) => (
                    <CartItem item={item} index={index} />
                    // <div className="cart__product__item" key={index}>
                    //   <img
                    //     src={`${apiUrl}${item.image}`}
                    //     alt="product-img"
                    //     className="product__img"
                    //   />
                    //   <div className="product__name">
                    //     <div className="product__name-title">{item.name}</div>
                    //     <div className="product__qty">
                    //       <div className="cart__item-qty">
                    //         <div
                    //           className="cart__item-qty-btn"
                    //           // onClick={() => updateQuantity("minus")}
                    //         >
                    //           <i className="fa-solid fa-minus"></i>
                    //         </div>
                    //         <div className="cart__item-qty-input">
                    //           {item.cartQuantity}
                    //         </div>
                    //         <div
                    //           className="cart__item-qty-btn"
                    //           // onClick={() => updateQuantity("plus")}
                    //         >
                    //           <i className="fa-solid fa-plus"></i>
                    //         </div>
                    //       </div>
                    //     </div>
                    //   </div>
                    //   <div className="product__price">
                    //     <div>{numberFormat(item.price)} đ</div>
                    //     <div>X</div>
                    //   </div>
                    // </div>
                  ))}

                <div className="cart__total">
                  <span>Tổng giá trị đơn hàng</span>
                  <span>{numberFormat(cart.cartTotalAmount)} đ</span>
                </div>

                <div className="cart__customer">
                  <div className="cart__customer__header">
                    Thông tin khách hàng
                  </div>
                  <div className="cart__customer__note">
                    Lưu ý: Các ô có dấu <span>(*)</span> cần điền đầy đủ thông
                    tin
                  </div>
                  <form className="cart__customer__info">
                    <div className="item">
                      <label>
                        Email<span> (*)</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="item-input"
                        placeholder="Nhập email"
                      />
                    </div>
                    <div className="item">
                      <label>
                        Họ và tên<span> (*)</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="item-input"
                        placeholder="Nhập họ tên"
                      />
                    </div>
                    <div className="item">
                      <label>
                        Điện thoại<span> (*)</span>
                      </label>
                      <input
                        name="phone"
                        type="text"
                        className="item-input"
                        placeholder="Nhập điện thoại"
                      />
                    </div>
                    <div className="item">
                      <label>
                        Địa chỉ<span> (*)</span>
                      </label>
                      <input
                        name="address"
                        type="text"
                        className="item-input"
                        placeholder="Nhập địa chỉ"
                      />
                    </div>
                    <div className="item">
                      <label>Ghi chú</label>
                      <textarea
                        name="note"
                        className="item-textarea"
                      ></textarea>
                    </div>
                  </form>
                </div>

                <div className="cart__pay-total">
                  <span>Tổng tiền thành toán:</span>
                  <span>{numberFormat(cart.cartTotalAmount)} đ</span>
                </div>

                <div className="cart__btn">
                  <button className="cart__btn-buy">
                    <p>Đặt hàng</p>
                    <p>(Trả tiền khi nhận hàng tại nhà)</p>
                  </button>
                  <button
                    onClick={() => alert("fsdfds")}
                    type="button"
                    className="cart__btn-online"
                    disabled
                  >
                    <p>Thanh toán online</p>
                    <p>(Bằng thẻ ATM, Visa, Master)</p>
                  </button>
                </div>

                <div className="cart__header">
                  <Link to="/" className="cart__header-link">
                    Mua thêm sản phẩm khác
                  </Link>
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

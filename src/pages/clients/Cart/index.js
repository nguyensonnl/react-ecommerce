import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "../../../components/Helmet";
import CartItem from "../../../components/CartItem.js";
import cart_empty from "../../../assets/img/cart_empty_background.png";
import { getTotals } from "../../../redux/cartSlice";
import { numberFormat } from "../../../utils/numberFormat";
import orderService from "../../../api/orderService";
import { clearCart } from "../../../redux/cartSlice";

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

  //Create new order
  const customer = useSelector((state) => state.customer.customer);
  const email = customer?.email;
  const firstName = customer?.firstName;
  const phone = customer?.phone;

  const isLoggedIn = useSelector((state) => state.customer.isLoggedIn);

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    note: "",
    cart: cart.cartItems,
  });

  useEffect(() => {
    setInputs({
      email: "" || email,
      name: "" || firstName,
      phone: "" || phone,
    });
  }, [customer]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (isLoggedIn) {
        const newData = {
          orderItem_id: cart.cartItems,
          customer_id: customer._id,
          phone: inputs.phone,
          address: inputs.address,
          note: inputs.note,
          methodPayment: "Thanh toán khi nhận hàng",
        };

        const res = await orderService.createNewOrder(newData);
        // const res = await axios.post(
        //   "http://localhost:5050/api/v1/orders",
        //   newData
        // );
        dispatch(clearCart());
        navigate("/");
        if (res.status === 200) {
          console.log("Success");
        } else {
          console.log("Some error occured");
        }
      } else {
        navigate("/account/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Helmet title="Giỏ hàng">
      <div className="grid">
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
                  cart.cartItems.map((item) => (
                    <CartItem item={item} key={item._id} />
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
                        value={inputs.email}
                        onChange={(e) => {
                          handleChangeInput(e);
                        }}
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
                        value={inputs.name}
                        onChange={(e) => {
                          handleChangeInput(e);
                        }}
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
                        value={inputs.phone}
                        onChange={(e) => {
                          handleChangeInput(e);
                        }}
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
                        value={inputs.address}
                        onChange={(e) => {
                          handleChangeInput(e);
                        }}
                      />
                    </div>
                    <div className="item">
                      <label>Ghi chú</label>

                      <textarea
                        name="note"
                        className="item-textarea"
                        value={inputs.note}
                        onChange={(e) => {
                          handleChangeInput(e);
                        }}
                      ></textarea>
                    </div>
                  </form>
                </div>

                <div className="cart__pay-total">
                  <span>Tổng tiền thành toán:</span>
                  <span>{numberFormat(cart.cartTotalAmount)} đ</span>
                </div>

                <div className="cart__btn">
                  <button
                    className="cart__btn-buy"
                    onClick={(e) => handleSubmit(e)}
                  >
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

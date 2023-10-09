import "./Cart.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "../../components/Helmet/Helmet";
import CartItem from "../../components/CartItem";
import { getTotals } from "../../redux/cartSlice";
import { numberFormat } from "../../utils/numberFormat";
import orderService from "../../api/orderService";
import { clearCart } from "../../redux/cartSlice";
import CartEmpty from "./components/CartEmpty";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

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
        <div className="cart__container">
          {cart.cartItems.length === 0 && <CartEmpty />}

          {cart.cartItems.length > 0 && (
            <div className="cart__info">
              <h3 className="cart__header">Giỏ hàng của bạn</h3>

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
                  <h3 className="cart__customer__header">
                    Thông tin khách hàng
                  </h3>
                  <form className="cart__customer__info">
                    <div className="item">
                      <input
                        name="email"
                        type="email"
                        className="item-input"
                        placeholder="Email (bắt buộc)"
                        value={inputs.email}
                        onChange={(e) => {
                          handleChangeInput(e);
                        }}
                      />
                    </div>
                    <div className="item">
                      <input
                        name="name"
                        type="text"
                        className="item-input"
                        placeholder="Họ tên (bắt buộc)"
                        value={inputs.name}
                        onChange={(e) => {
                          handleChangeInput(e);
                        }}
                      />
                    </div>
                    <div className="item">
                      <input
                        name="phone"
                        type="text"
                        className="item-input"
                        placeholder="Điện thoại (bắt buộc)"
                        value={inputs.phone}
                        onChange={(e) => {
                          handleChangeInput(e);
                        }}
                      />
                    </div>
                    <div className="item">
                      <input
                        name="address"
                        type="text"
                        className="item-input"
                        placeholder="Địa chỉ (bắt buộc)"
                        value={inputs.address}
                        onChange={(e) => {
                          handleChangeInput(e);
                        }}
                      />
                    </div>
                    <div className="item">
                      <textarea
                        name="note"
                        className="item-textarea"
                        value={inputs.note}
                        onChange={(e) => {
                          handleChangeInput(e);
                        }}
                        placeholder="Ghi chú"
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

                <div className="cart__other-product">
                  <Link to="/" className="cart__header-link">
                    Mua thêm sản phẩm khác
                  </Link>
                </div>
              </div>
              <div style={{ marginTop: "12px" }}></div>
            </div>
          )}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;

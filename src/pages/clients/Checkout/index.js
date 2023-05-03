import "./Checkout.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/img/logo/checkout_logo.jpg";
import { useDispatch } from "react-redux";
import { clearCart, getTotals } from "../../../redux/cartSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import orderService from "../../../api/orderService";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const customer = useSelector((state) => state.customer.customer);
  const email = customer?.email;
  const firstName = customer?.firstName;
  const phone = customer?.phone;

  const apiUrl = process.env.REACT_APP_BASE_URL;

  const isLoggedIn = useSelector((state) => state.customer.isLoggedIn);

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    note: "",
    methodPayment: "",
    cart: cart.cartItems,
  });

  useEffect(() => {
    setInputs({
      email: email || "",
      name: firstName || "",
      phone: phone || "",
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
          methodPayment: inputs.methodPayment,
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
    <div className="checkout">
      <div className="checkout__info">
        <div className="checkout__logo">
          <Link to="/" className="checkout__logo-link">
            <img src={logo} className="checkout__logo-img" alt="logo" />
          </Link>
        </div>

        <div className="checkout__content">
          <div className="content__info">
            <div className="content__header">
              <h3>Thông tin nhận hàng</h3>
            </div>
            <div className="content__body">
              <form>
                <div className="form-group1">
                  <label>
                    Email<span>*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control1"
                    value={inputs.email}
                    placeholder="Email"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  />
                </div>
                <div className="form-group1">
                  <label>
                    Họ và tên<span>*</span>
                  </label>
                  <input
                    value={inputs.name}
                    name="name"
                    type="text"
                    className="form-control1"
                    placeholder="Họ và tên"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  />
                </div>
                <div className="form-group1">
                  <label>
                    Số điện thoại<span>*</span>
                  </label>
                  <input
                    value={inputs.phone}
                    name="phone"
                    type="text"
                    className="form-control1"
                    placeholder="Số điện thoại"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  />
                </div>
                <div className="form-group1">
                  <label>
                    Địa chỉ<span>*</span>
                  </label>
                  <input
                    value={inputs.address}
                    name="address"
                    type="text"
                    className="form-control1"
                    placeholder="Vui lòng nhập địa chỉ chi tiết"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  />
                </div>
                <div className="form-group1">
                  <label>Ghi chú</label>
                  <textarea
                    value={inputs.note}
                    name="note"
                    className="form-control1"
                    placeholder="Ví dụ: Giao hàng trong giờ hành chính"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
          <div className="content__right">
            <div className="content__delivery">
              <h3>Vận chuyển</h3>
              <div className="delivery__body">
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid var(--extra-color)",
                    borderRadius: "99px",
                    lineHeight: "20px",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      border: "1px solid var(--extra-color)",
                      borderRadius: "99px",
                      lineHeight: "20px",
                      textAlign: "center",
                      background: "var(--extra-color)",
                      height: "10px",
                      padding: "4px",
                      position: "absolute",
                      top: "4px",
                      left: "4px",
                    }}
                  ></span>
                </span>

                <label>Giao hàng tận nơi</label>
                <span>Miễn phí</span>
              </div>
            </div>
            <div className="content__payment">
              <h3>Đặt hàng</h3>
              <div className="content__payment-body">
                <div className="content__radio">
                  <input
                    type="radio"
                    name="methodPayment"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                    value="Thanh toán khi nhận hàng"
                    checked={
                      inputs.methodPayment === "Thanh toán khi nhận hàng"
                    }
                  />
                  <div className="radio__des">
                    <label>Thanh toán khi nhận hàng</label>
                    <p>
                      Quý khách sẽ thanh toán bằng tiền mặt hoặc thẻ khi Lam Sơn
                      Watch giao hàng cho quý khách
                    </p>
                  </div>
                </div>
                <div className="content__radio">
                  <input
                    type="radio"
                    name="methodPayment"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                    value="Thanh toán chuyển khoản"
                    checked={inputs.methodPayment === "Thanh toán chuyển khoản"}
                  />
                  <div className="radio__des">
                    <label>Thanh toán chuyển khoản</label>
                    <p>Ngân hàng: Vietcombank - CN Tân Phú</p>
                    <p>Tên tài khoản: Nguyễn Lam Sơn</p>
                    <p>Số tài khoản: 1013030711</p>
                    <p>
                      Nội dung: Số bill trên web + Số điện thoại khi KH dặt hàng
                    </p>
                  </div>
                </div>
                <div className="content__radio">
                  <input
                    type="radio"
                    name="methodPayment"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                    value="Thanh toán online qua cổng thanh toán"
                    checked={
                      inputs.methodPayment ===
                      "Thanh toán online qua cổng thanh toán"
                    }
                  />
                  <div className="radio__des">
                    <label>Thanh toán online qua cổng thanh toán</label>
                    <p>Quý khách sẽ được chuyển đến "VNPay" để thanh toán</p>
                  </div>
                </div>
                <div className="content__radio">
                  <input
                    type="radio"
                    name="methodPayment"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                    value="Thanh toán online bằng thẻ quốc tế"
                    checked={
                      inputs.methodPayment ===
                      "Thanh toán online bằng thẻ quốc tế"
                    }
                  />
                  <div className="radio__des">
                    <label>Thanh toán online bằng thẻ quốc tế</label>
                    <p>Quý khách sẽ được chuyển đến trang khác để thanh toán</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout__footer">
          <ul className="checkout__footer-policy">
            <li className="checkout__footer-policy__item">
              <Link to="" className="checkout__footer-policy__link">
                Chính sách hoàn trả
              </Link>
            </li>
            <li className="checkout__footer-policy__item">
              <Link to="" className="checkout__footer-policy__link">
                Chính sách bảo mật
              </Link>
            </li>
            <li className="checkout__footer-policy__item">
              <Link to="" className="checkout__footer-policy__link">
                Điều khoản sử dụng
              </Link>
            </li>
          </ul>
          <div className="checkout__footer-address">
            <p>
              Đồng Hồ Bảo Thanh - Hotline/Zalo: 0825 247 999 - Showroom: Số 195
              Nguyễn Trãi, Thanh Xuân, Hà Nội - Website:
            </p>
            <p>https://donghobaothanh.vn/ - Email: donghobaothanh@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="checkout__order">
        <div className="order__title">
          Đơn hàng ({cart.cartTotalQuantity} sản phẩm)
        </div>
        {cart.cartItems &&
          cart.cartItems.length > 0 &&
          cart.cartItems.map((item, index) => (
            <div className="order__list-product" key={index}>
              <img
                src={`${apiUrl}${item.image}`}
                alt="image"
                className="order__product-img"
              />
              <div className="order__product-name">
                {item.name}
                <span
                  style={{
                    marginLeft: "6px",
                    fontSize: "1rem",
                    color: "red",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  X {item.cartQuantity}
                </span>
              </div>
              <div className="order__product-price">
                {new Intl.NumberFormat().format(item.price)}
              </div>
            </div>
          ))}

        <div className="order__sale">
          <input
            type="text"
            className="order__input"
            placeholder="Nhập mã giảm giá"
          />
          <button className="order__button">Áp dụng</button>
        </div>
        <div className="order__total">
          <div className="order__fee">
            <span>Tạm tính</span>
            <span>{new Intl.NumberFormat().format(cart.cartTotalAmount)}</span>
          </div>
          <div className="order__delivery">
            <span>Phí vận chuyển</span>
            <span>Miễn phí</span>
          </div>
          <div className="order__price-total">
            <span>Tổng cộng</span>
            <span>{new Intl.NumberFormat().format(cart.cartTotalAmount)}đ</span>
          </div>
          <div className="order__button">
            <Link to="/cart" className="order__link">
              <i>&lt;</i> Quay về giỏ hàng
            </Link>
            <button
              type="sumbit"
              className="order__submit"
              onClick={(e) => handleSubmit(e)}
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
      {/* <Row>
        <Col col={6}>
          <div className="checkout__info">
            <div className="checkout__title">Thông tin nhận hàng</div>
            <div className="checkout__form">
              
            </div>
          </div>  
        </Col>
        <Col col={6}>
          <div className="checkout__order">
            <div className="checkout__order-title">Đơn hàng của bạn</div>
            <div className="checkout__product">
              <div className="checkout__product-item">
                <div className="checkout__product-name">
                  fsdfsfsdfdsfdsfdsfdsfsdfdsf fsdfdsf fsdfdsfs fsdfsdfdsfd
                  dfdsfdsfsdffssdf
                  <span>X 2</span>
                </div>
                <div className="checkout__total">49348230984093</div>
              </div>
              <div className="checkout__product-item">
                <div className="checkout__product-name">
                  fsdfsfsdfdsfdsfdsfdsfsdfdsf fsdfdsf fsdfdsfs fsdfsdfdsfd
                  dfdsfdsfsdffssdf
                  <span>X 2</span>
                </div>
                <div className="checkout__total">49348230984093</div>
              </div>
            </div>
            <div className="checkout__fee">
              <div className="checkout__fee-temp">
                <div>Tạm tính</div>
                <div>500000000</div>
              </div>
              <div className="checkout__fee-deliver">
                <span>Phí vận chuyển</span>
                <span>Miễn phí</span>
              </div>
              <div className="checkout__subtotal">
                <span>Tổng cộng</span>
                <span>5959595959</span>
              </div>
            </div>
           
            <div className="checkout__btn">
              <span>
                <Link to="" className="checkout__link">
                  Quay về giỏ hàng
                </Link>
              </span>
              <button>Đặt hàng</button>
            </div>
          </div>
        </Col>
      </Row> */}
    </div>
  );
};

export default Checkout;

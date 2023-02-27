import "./Checkout.scss";
import Col from "../../../components/Col";
import Row from "../../../components/Row";
import Breadcrumb from "../../../components/Breadcrumb";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo/checkout_logo.jpg";

const Checkout = () => {
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
                    type="email"
                    className="form-control1"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group1">
                  <label>
                    Họ và tên<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control1"
                    placeholder="Họ và tên"
                  />
                </div>
                <div className="form-group1">
                  <label>
                    Số điện thoại<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control1"
                    placeholder="Số điện thoại"
                  />
                </div>
                <div className="form-group1">
                  <label>
                    Địa chỉ<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control1"
                    placeholder="Địa chỉ"
                  />
                </div>
                <div className="form-group1">
                  <label>Ghi chú</label>
                  <textarea className="form-control1"></textarea>
                </div>
              </form>
            </div>
          </div>
          <div className="content__payment">
            <h3>Đặt hàng</h3>
            <div className="content__payment-body">
              <div className="content__radio">
                <input name="a" type="radio" />
                <label>Trả tiền mặt khi nhận hàng</label>
              </div>
              <div className="content__radio">
                <input name="a" type="radio" />
                <label>Chuyển khoản ngân hàng</label>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="checkout__footer"></div>
      </div>
      <div className="checkout__order"></div>
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

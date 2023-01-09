import React from "react";
import Helmet from "../../../components/Helmet";
import Grid from "../../../components/Grid";
import "./Cart.scss";
import CartItem from "../../../components/CartItem.js";
import Col from "../../../components/Col";
import Row from "../../../components/Row";
import { Link } from "react-router-dom";
import Section, {
  SectionBody,
  SectionTitle,
} from "../../../components/Section";
import ProductCart from "../../../components/ProductCard";

const Cart = () => {
  return (
    <Helmet title="Giỏ hàng">
      <Grid>
        <div className="cart section-m1">
          <Row>
            <Col col={6}>
              <table className="cart__list">
                <thead>
                  <tr>
                    <th>Loại bỏ</th>
                    <th>Hình ảnh</th>
                    <th>Sản phẩm</th>
                    <th>Giá bán</th>
                    <th>Số lượng</th>
                  </tr>
                </thead>
                <tbody>
                  <CartItem />
                </tbody>
              </table>
            </Col>
            <Col col={6}></Col>
          </Row>

          <div className="cart__checkout section-m1">
            <div className="cart__sale">
              <p className="cart__sale-title">Áp dụng phiếu giảm giá</p>
              <div className="cart__sale-apply">
                <input
                  type="text"
                  placeholder="Nhập phiếu giảm giá của bạn ở đây"
                />
                <button type="button">Ứng dụng</button>
              </div>
            </div>
            <div className="cart__info">
              <div className="cart__info__title">
                <p>Bạn đang có 3 sản phẩm trong giỏ hàng</p>
                <div className="cart__info__total-price">
                  <span>Tổng thu:</span>
                  <span>1.500.000</span>
                </div>
                <div className="cart__info__delivery">
                  <span>Phí chuyển hàng:</span>
                  <span>Miễn phí</span>
                </div>
                <div className="cart__info__title-price">
                  <span>Thành tiền:</span>
                  <span>1.500.000</span>
                </div>
              </div>
              <div className="cart__info__btn">
                <button type="button">Đặt hàng</button>
                <Link to="/catalog">
                  <button type="button">Tiếp tục mua hàng</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Section>
          <SectionTitle>Gợi ý dành cho bạn</SectionTitle>
          <SectionBody>
            <ProductCart />
          </SectionBody>
        </Section>
      </Grid>
    </Helmet>
  );
};

export default Cart;

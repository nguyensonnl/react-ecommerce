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
            <Col col={4}>
              <div className="cart__info">
                <div className="cart__info__title">
                  <p>Bạn đang có 3 sản phẩm trong giỏ hàng</p>
                  <div className="cart__info__title-price">
                    <span>Thành tiền</span>
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
            </Col>
            <Col col={8}>
              <table className="cart__list">
                <thead>
                  <tr>
                    <th>Loại bỏ</th>
                    <th>Hình ảnh</th>
                    <th>Sản phẩm</th>
                    <th>Giá bán</th>
                    <th>Số lượng</th>
                    <th>Tổng thu</th>
                  </tr>
                </thead>
                <tbody>
                  <CartItem />
                </tbody>
              </table>
            </Col>
          </Row>
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

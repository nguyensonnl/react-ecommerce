import React from "react";
import "./ProductView.scss";
import Row from "../Row";
import Col from "../Col";

import f1 from "../../assets/img/products/f1.jpg";
import f2 from "../../assets/img/products/f2.jpg";
import f3 from "../../assets/img/products/f3.jpg";
import f4 from "../../assets/img/products/f4.jpg";

const ProductView = () => {
  return (
    <div className="product-view section-m1">
      <Row>
        <Col col={5}>
          <div className="product-view__avatar">
            <img src={f1} className="product-view__img" />
            <div className="product-view__img-group">
              <img src={f1} className="product-view__img-group-col" />
              <img src={f2} className="product-view__img-group-col" />
              <img src={f3} className="product-view__img-group-col" />
              <img src={f4} className="product-view__img-group-col" />
            </div>
          </div>
        </Col>
        <Col col={7}>
          <div>VŨ THỊ NGỌC HUYỀN</div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductView;

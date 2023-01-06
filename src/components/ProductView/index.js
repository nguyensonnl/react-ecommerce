import React, { useState } from "react";
import "./ProductView.scss";
import Row from "../Row";
import Col from "../Col";
import { useNavigate } from "react-router-dom";

import f1 from "../../assets/img/products/f1.jpg";
import f2 from "../../assets/img/products/f2.jpg";
import f3 from "../../assets/img/products/f3.jpg";
import f4 from "../../assets/img/products/f4.jpg";
import { Link } from "react-router-dom";

const ProductView = () => {
  const [previewImg, setPreviewImg] = useState(f1);
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const handleGotoCart = () => {
    navigate("/cart");
  };

  return (
    <div className="product section-m1">
      <Row>
        <Col col={5}>
          <div className="product__images">
            <img src={previewImg} className="product__images-main" />
            <div className="product__images-list">
              <img
                src={f1}
                onClick={() => setPreviewImg(f1)}
                className="product__images-list-item"
              />
              <img
                src={f2}
                onClick={() => setPreviewImg(f2)}
                className="product__images-list-item"
              />
              <img
                src={f3}
                onClick={() => setPreviewImg(f3)}
                className="product__images-list-item"
              />
              <img
                src={f4}
                onClick={() => setPreviewImg(f4)}
                className="product__images-list-item"
              />
            </div>
          </div>
        </Col>
        <Col col={7}>
          <div className="product__info">
            <div className="product__info-title">Thời trang nam áo thun</div>

            <div className="product__info-rate">
              <ul className="product__info-rate-list">
                <li className="product__info-rate-item">
                  <i className="fa-solid fa-star product__info-rate-icon"></i>
                </li>
                <li className="product__info-rate-item">
                  <i className="fa-solid fa-star product__info-rate-icon"></i>
                </li>
                <li className="product__info-rate-item">
                  <i className="fa-solid fa-star product__info-rate-icon"></i>
                </li>
                <li className="product__info-rate-item">
                  <i className="fa-solid fa-star product__info-rate-icon"></i>
                </li>
                <li className="product__info-rate-item">
                  <i className="fa-solid fa-star product__info-rate-icon"></i>
                </li>
              </ul>
              <Link to="" className="product__info-rate-view">
                ( 250 đánh giá )
              </Link>
            </div>

            <div className="product__info-price">
              <span className="product__info-price-new">1.500.000đ</span>
              <span className="product__info-price-old">1.900.000đ</span>
            </div>

            <div className="product__info-qty">
              <span className="product__info-qty-title">Số lượng:</span>
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="product__info-qty-item"
              />
            </div>

            <div className="product__info-des">
              <div className="product__info-des-title">Thông tin sản phẩm:</div>
              <p className="product__info-des-item">
                Tank Française watch, small model, quartz movement. Steel case
                set with 24 brilliant-cut diamonds totaling 0.49 carats. Faceted
                crown set with a synthetic cabochon-shaped spinel. Silvered
                dial. Blued-steel sword-shaped hands. Sapphire crystal. Steel
                bracelet. Case dimensions: 25 mm x 20 mm, thickness: 6.14 mm.
                Water-resistant up to 3 bar (approx. 30 meters/100 feet)
              </p>
            </div>

            <div className="product__info-action">
              <button type="button" className="product__info-add">
                Thêm vào giỏ hàng
              </button>
              <button
                onClick={() => handleGotoCart()}
                type="button"
                className="product__info-buy"
              >
                Mua ngay
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductView;

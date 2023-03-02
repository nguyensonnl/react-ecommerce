import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./ProductView.scss";
import Row from "../Row";
import Col from "../Col";
import { useNavigate } from "react-router-dom";

import f1 from "../../assets/img/products/f1.jpg";
import f2 from "../../assets/img/products/f2.jpg";
import f3 from "../../assets/img/products/f3.jpg";
import f4 from "../../assets/img/products/f4.jpg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductView = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [previewImg, setPreviewImg] = useState(product.image);
  const [qty, setQty] = useState(1);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product.image) {
      setPreviewImg(product.image || "");
    }
  }, [product.image]);

  useEffect(() => {}, []);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity <= 1 ? 1 : quantity - 1);
    }
  };

  const handleGotoCart = (product) => {
    dispatch(
      addToCart({
        ...product,
        cartQuantity: quantity ? quantity : 1,
      })
    );
    navigate("/cart");
  };

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        ...product,
        cartQuantity: quantity ? quantity : 1,
      })
    );
    toast.success("Thêm vào giỏ hàng thành công", {
      position: "top-right",
    });
  };

  let nf = new Intl.NumberFormat();

  return (
    <div className="product section-m1">
      <Row>
        <Col col={5}>
          <div className="product__images">
            <img src={previewImg} className="product__images-main" />
            <div className="product__images-list">
              {product.images &&
                product.images.length > 0 &&
                product.images.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    onClick={() => setPreviewImg(url)}
                    className="product__images-list-item"
                  />
                ))}

              {/* <img
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
              /> */}
            </div>
          </div>
        </Col>
        <Col col={7}>
          <div className="product__info">
            <div className="product__info-title">{product.name}</div>
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

            <div className="product__info-brand">
              <span>Thương hiệu:</span>
              {product.brand && <span> {product.brand.name}</span>}
            </div>

            <div className="product__info-price">
              <span className="product__info-price-new">
                {nf.format(product.price)}
              </span>
              {/* <span className="product__info-price-old">1.900.000đ</span> */}
            </div>

            <div className="product__info-qty">
              <span className="product__info-qty-title">Số lượng:</span>
              {/* <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="product__info-qty-item"
              /> */}
              <div className="product__info-qty-mount">
                <div
                  className="product__info-qty-btn"
                  onClick={() => updateQuantity("minus")}
                >
                  <i className="fa-solid fa-minus"></i>
                </div>
                <div className="product__info-qty-input">{quantity}</div>
                <div
                  className="product__info-qty-btn"
                  onClick={() => updateQuantity("plus")}
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>

            <div className="product__info-des">
              <div className="product__info-des-title">Thông tin sản phẩm:</div>
              <p className="product__info-des-item">{product.description}</p>
            </div>

            <div className="product__info-action">
              <button
                type="button"
                className="product__info-add"
                onClick={() => handleAddToCart(product)}
              >
                Thêm vào giỏ hàng
              </button>
              <button
                onClick={() => handleGotoCart(product)}
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

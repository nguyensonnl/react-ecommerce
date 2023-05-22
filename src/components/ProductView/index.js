import React, { useEffect, useState } from "react";
import "./ProductView.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { numberFormat } from "../../utils/numberFormat";

const ProductView = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlImage = `${process.env.REACT_APP_BASE_URL}${product.image}`;
  const [previewImg, setPreviewImg] = useState(urlImage);
  const [qty, setQty] = useState(1);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product.image) {
      setPreviewImg(urlImage || "");
    }
  }, [urlImage]);

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
    <>
      <div className="row product__detail">
        <div className="col-5 col-c-12">
          <div className="product__img-list">
            <img src={previewImg} className="product__img-main" />
            <div className="product__img-slide">
              {product.images &&
                product.images.length > 0 &&
                product.images.map((url, index) => (
                  <img
                    key={index}
                    src={`${process.env.REACT_APP_BASE_URL}${url}`}
                    onClick={() =>
                      setPreviewImg(`${process.env.REACT_APP_BASE_URL}${url}`)
                    }
                    className="product__img-item"
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="col-7 col-c-12">
          <div className="product__info">
            <div className="product__title">{product.name}</div>
            <div className="product__rate">
              <ul className="product__rate-list">
                <li className="product__rate-item">
                  <i className="fa-solid fa-star product__rate-icon"></i>
                </li>
                <li className="product__rate-item">
                  <i className="fa-solid fa-star product__rate-icon"></i>
                </li>
                <li className="product__rate-item">
                  <i className="fa-solid fa-star product__rate-icon"></i>
                </li>
                <li className="product__rate-item">
                  <i className="fa-solid fa-star product__rate-icon"></i>
                </li>
                <li className="product__rate-item">
                  <i className="fa-solid fa-star product__rate-icon"></i>
                </li>
              </ul>
              {/* <Link to="" className="product__rate-number">
                ( 250 đánh giá )
              </Link> */}
            </div>
            <div className="product__brand">
              <span>Thương hiệu:</span>
              {product.brand && <span> {product.brand.name}</span>}
            </div>
            <div className="product__price">
              {numberFormat(product.price)}
              <sup>đ</sup>
            </div>
            <div className="product__quantity">
              <span className="product__quantity-title">Số lượng:</span>
              <div className="product__quantity-adjust">
                <div
                  className="product__quantity-btn"
                  onClick={() => updateQuantity("minus")}
                >
                  <i className="fa-solid fa-minus"></i>
                </div>
                <div className="product__quantity-number">{quantity}</div>
                <div
                  className="product__quantity-btn"
                  onClick={() => updateQuantity("plus")}
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="product__des">
              <div className="product__des-title">Thông tin sản phẩm:</div>
              <p className="product__des-content">{product.description}</p>
            </div>
            <div className="product__submit">
              <button
                onClick={() => handleGotoCart(product)}
                type="button"
                className="btn-buy"
              >
                <span>Mua ngay</span>
                <span>Miễn phí vận chuyển - Thanh toán tại nhà</span>
              </button>
              <div className="btn-group">
                <button disabled type="button" className="btn-online">
                  <span>Mua trả góp 0%</span>
                  <span>Qua thẻ Visa, Master, JCB</span>
                </button>
                <button
                  type="button"
                  className="btn-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  <span>Giỏ hàng</span>
                  <span>Thêm sản phẩm vào giỏ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;

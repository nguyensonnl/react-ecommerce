import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, getTotals } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { numberFormat } from "../../utils/numberFormat";
import "./ProductView.scss";

const ProductView = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlImage = `${process.env.REACT_APP_BASE_IMG}${product.image}`;
  const [previewImg, setPreviewImg] = useState(urlImage);
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
    if (quantity > product.countInStock) {
      toast.success("Không đủ số lượng", {
        position: "top-right",
      });
    } else {
      dispatch(
        addToCart({
          ...product,
          cartQuantity: quantity ? quantity : 1,
        })
      );
      navigate("/cart");
    }
  };

  const handleAddToCart = (product) => {
    if (quantity > product.countInStock) {
      toast.success("Không đủ số lượng", {
        position: "top-right",
      });
    } else {
      dispatch(
        addToCart({
          ...product,
          cartQuantity: quantity ? quantity : 1,
        })
      );
      dispatch(getTotals());
      toast.success("Thêm vào giỏ hàng thành công", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <div className="row product__detail">
        <div className="col-5 col-c-12">
          <div className="product__img__container">
            <div className="product__img__main">
              <img src={previewImg} />
            </div>

            <div className="product__img__slide">
              {product.images &&
                product.images.length > 0 &&
                product.images.map((url, index) => (
                  <img
                    key={index}
                    src={`${process.env.REACT_APP_BASE_IMG}${url}`}
                    onClick={() =>
                      setPreviewImg(`${process.env.REACT_APP_BASE_IMG}${url}`)
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
              <span> {product?.brand?.name}</span>
            </div>
            <div className="product__price">
              {numberFormat(product.price)}
              <sup>đ</sup>
            </div>
            {/* <div className="product__quantity" style={{ alignItems: "center" }}>
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
              <span style={{ marginLeft: "10px", fontSize: "1.4rem" }}>
                {product.countInStock} sản phẩm có sẵn
              </span>
            </div> */}
            <div className="product__des">
              <div className="product__des-title">Thông tin sản phẩm:</div>
              <p className="product__des-content">{product.description}</p>
            </div>

            <div className="product__action">
              <button
                onClick={() => handleGotoCart(product)}
                type="button"
                className="btn-buy"
              >
                Mua ngay
              </button>
              <button
                type="button"
                className="btn-cart"
                onClick={() => handleAddToCart(product)}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;

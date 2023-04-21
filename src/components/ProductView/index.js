import React, { useEffect, useState } from "react";
import "./ProductView.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSkeleton from "../../components/Skeleton";

const ProductView = ({ product, isLoading }) => {
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
      {isLoading && (
        <div className="row product__detail">
          <div className="col-5">
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
          <div className="col-7">
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
                {nf.format(product.price)}
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
              <div className="product__description">
                <div className="product__description-title">
                  Thông tin sản phẩm:
                </div>
                <p className="product__description-content">
                  {product.description}
                </p>
              </div>
              <div className="product__submit">
                <button
                  type="button"
                  className="product__submit-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Thêm vào giỏ hàng
                </button>
                <button
                  onClick={() => handleGotoCart(product)}
                  type="button"
                  className="product__submit-buy"
                >
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isLoading && <LoadingProductView />}
    </>
  );
};

const LoadingProductView = () => {
  return (
    <div className="row product__detail">
      <div className="col-5">
        <div className="product__img-list">
          <LoadingSkeleton className="loading-img" />
          <div className="product__img-slide">
            <LoadingSkeleton className="loading-slide" />
          </div>
        </div>
      </div>
      <div className="col-7">
        <div className="product__info">
          <LoadingSkeleton className="loading-name" />
          <div className="product__rate">
            <LoadingSkeleton className="loading-rate" />
          </div>
          <div className="product__brand">
            <LoadingSkeleton className="loading-brand" />
          </div>
          <div className="product__price">
            <LoadingSkeleton className="loading-price" />
          </div>
          <div className="product__quantity">
            <span className="product__quantity-title">Số lượng:</span>
            <div className="product__quantity-adjust">
              <div className="product__quantity-btn">
                <i className="fa-solid fa-minus"></i>
              </div>
              <div className="product__quantity-number">1</div>
              <div className="product__quantity-btn">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="product__description">
            <div className="product__description-title">
              Thông tin sản phẩm:
            </div>
            <LoadingSkeleton className="loading-des" />
          </div>
          <div className="product__submit">
            <button type="button" className="product__submit-cart">
              Thêm vào giỏ hàng
            </button>
            <button type="button" className="product__submit-buy">
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

//ProductView.LoadingProductView = LoadingProductView;

export default ProductView;

import React from "react";
import "./ProductCard.scss";
import f1 from "../../assets/img/products/f1.jpg";

import { Link } from "react-router-dom";
import LoadingSkeleton from "../Skeleton";
const apiUrl = process.env.REACT_APP_BASE_URL;

const ProductCard = (props) => {
  return (
    <div className="product-card" key={props._id}>
      <Link to={`/product/${props.id}`} className="product-card__link">
        <img
          src={`${apiUrl}${props.src}`}
          alt=""
          className="product-card__image"
        />
        <div className="product-card__info">
          <div className="product-card__name">{props.name}</div>
          <ul className="product-card__rating">
            <li className="product-card__rating-item">
              <i className="fa-solid fa-star product-card__rating-icon"></i>
            </li>
            <li className="product-card__rating-item">
              <i className="fa-solid fa-star product-card__rating-icon"></i>
            </li>
            <li className="product-card__rating-item">
              <i className="fa-solid fa-star product-card__rating-icon"></i>
            </li>
            <li className="product-card__rating-item">
              <i className="fa-solid fa-star product-card__rating-icon"></i>
            </li>
            <li className="product-card__rating-item">
              <i className="fa-solid fa-star product-card__rating-icon"></i>
            </li>
          </ul>
          <div className="product-card__price">
            {/* <span className="product-card__price-sale">
                  {props.priceSale ? props.priceSale : ""}
                </span> */}
            <span className="product-card__price-sale">
              {props.price} <sup>đ</sup>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

const LoadingProduct = () => {
  return (
    <div className="product-card">
      <Link to="#" className="product-card__link">
        <div style={{ marginBottom: "10px" }}>
          <LoadingSkeleton className="product-card__image-loading" />
        </div>

        <div className="product-card__info">
          <div className="product-card__name" style={{ marginBottom: "5px" }}>
            <LoadingSkeleton className="product-cart__item-loading" />
          </div>
          <ul className="product-card__rating" style={{ marginBottom: "5px" }}>
            <LoadingSkeleton className="product-cart__item-loading" />
          </ul>
          <div className="product-card__price" style={{ marginBottom: "5px" }}>
            <span className="product-card__price-sale">
              <LoadingSkeleton className="product-cart__item-loading" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

ProductCard.LoadingProduct = LoadingProduct;

export default ProductCard;

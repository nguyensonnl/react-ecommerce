import React from "react";
import "./ProductCard.scss";
import f1 from "../../assets/img/products/f1.jpg";

import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="product-card" key={props.key}>
      <Link to={`/product/${props.id}`} className="product-card__link">
        <img src={props.src} alt="" className="product-card__image" />
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

export default ProductCard;

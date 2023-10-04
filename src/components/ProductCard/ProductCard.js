import { Link } from "react-router-dom";
import { numberFormat } from "../../utils/numberFormat";
import "./ProductCard.scss";

const apiUrl = process.env.REACT_APP_BASE_IMG;

const ProductCard = (props) => {
  const { product, className } = props;

  return (
    <div
      className={`product-card ${className ? className : ""}`}
      key={product._id}
    >
      <Link to={`/sp/${product.slug}`} className="product-card__link">
        <img
          src={`${apiUrl}${product.image}`}
          alt="Product"
          className="product-card__image"
        />
        <div className="product-card__info">
          <div className="product-card__name">{product.name}</div>
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
            <span className="product-card__price-sale">
              {numberFormat(product.price)} <sup>đ</sup>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

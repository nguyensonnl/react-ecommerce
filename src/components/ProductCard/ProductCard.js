import { Link } from "react-router-dom";
import { numberFormat } from "../../utils/numberFormat";
import "./ProductCard.scss";

const apiUrl = process.env.REACT_APP_BASE_IMG;

const ProductCard = (props) => {
  const { product, className } = props;

  return (
    <Link
      to={`/sp/${product.slug}`}
      className={`product__card ${className ? className : ""}`}
      key={product._id}
    >
      <img
        src={`${apiUrl}${product.image}`}
        alt="Product"
        className="product__card__image"
      />
      <div className="product__card__info">
        <div className="product__card__name">{product.name}</div>
        <ul className="product__card__rating">
          <li className="product__card__rating-item">
            <i className="fa-solid fa-star product__icon"></i>
          </li>
          <li className="product__card__rating-item">
            <i className="fa-solid fa-star product__icon"></i>
          </li>
          <li className="product__card__rating-item">
            <i className="fa-solid fa-star product__icon"></i>
          </li>
          <li className="product__card__rating-item">
            <i className="fa-solid fa-star product__icon"></i>
          </li>
          <li className="product__card__rating-item">
            <i className="fa-solid fa-star product__icon"></i>
          </li>
        </ul>
        <div className="product__card__price">
          <span className="price__sale">
            {numberFormat(product.price)} <sup>đ</sup>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

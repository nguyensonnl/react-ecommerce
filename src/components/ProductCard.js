import { Link } from "react-router-dom";
const apiUrl = process.env.REACT_APP_BASE_IMG;

const ProductCard = (props) => {
  return (
    <div
      className={`product-card ${props.className ? props.className : ""}`}
      key={props._id}
    >
      <Link to={`/sp/${props.slug}`} className="product-card__link">
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

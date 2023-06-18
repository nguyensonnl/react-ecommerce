import "./CartItem.scss";
import { useDispatch } from "react-redux";
import { removeCart, decreaseCart, increaseCart } from "../../redux/cartSlice";
import { numberFormat } from "../../utils/numberFormat";

const CartItem = (props) => {
  const { item } = props;
  const dispatch = useDispatch();

  const updateQuantity = (type) => {
    if (type === "plus") {
      dispatch(increaseCart(item));
    } else {
      dispatch(decreaseCart(item));
    }
  };

  const handleRemoveCart = () => {
    dispatch(removeCart(item));
  };

  const apiUrl = process.env.REACT_APP_BASE_IMG;
  return (
    <div className="cart__product__item">
      <img
        src={`${apiUrl}${item.image}`}
        alt="product-img"
        className="product__img"
      />
      <div className="product__name">
        <div className="product__name-title">{item.name}</div>
        <div className="product__qty">
          <div className="cart__item-qty">
            <div
              className="cart__item-qty-btn"
              onClick={() => updateQuantity("minus")}
            >
              <i className="fa-solid fa-minus"></i>
            </div>
            <div className="cart__item-qty-input">{item.cartQuantity}</div>
            <div
              className="cart__item-qty-btn"
              onClick={() => updateQuantity("plus")}
            >
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="product__price">
        <div>{numberFormat(item.price)} đ</div>
        <div onClick={() => handleRemoveCart()} style={{ display: "inline" }}>
          <i className="fa-regular fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

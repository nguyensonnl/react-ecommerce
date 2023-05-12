import { useState } from "react";
import { useDispatch } from "react-redux";
import f1 from "../../assets/img/products/f1.jpg";
import { removeCart, decreaseCart, increaseCart } from "../../redux/cartSlice";
import "./CartItem.scss";
import { numberFormat } from "../../utils/numberFormat";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { item, index } = props;
  //const [quantity, setQuantity] = useState(item.cartQuantity);

  const totalPrice = item.price * item.cartQuantity;
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

  const apiUrl = process.env.REACT_APP_BASE_URL;
  return (
    <div className="cart__item" key={index}>
      <div className="cart__item-remove" onClick={() => handleRemoveCart()}>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <img className="cart__item-img" src={`${apiUrl}${item.image}`} />
      <div className="cart__item-info">
        <div className="cart__item-name">{item.name}</div>
        <div className="cart__item-price">
          {numberFormat(item.price)}
          <sup>đ</sup>
        </div>
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
  );
};

export default CartItem;

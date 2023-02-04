import { useState } from "react";
import { useDispatch } from "react-redux";
import f1 from "../../assets/img/products/f1.jpg";
import { removeCart, decreaseCart, increaseCart } from "../../redux/cartSlice";
import "./CartItem.scss";

const CartItem = (props) => {
  const { item, index } = props;
  //const [quantity, setQuantity] = useState(item.cartQuantity);

  const dispatch = useDispatch();

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
  return (
    <div className="cart__item" key={index}>
      <div className="cart__item-close" onClick={() => handleRemoveCart()}>
        X
      </div>
      <img className="cart__item-img" src={item.image} />
      <div className="cart__item-name">{item.name}</div>
      <div className="cart__item-price">
        {item.price.toLocaleString()}
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
      <div className="cart__item-price total-price">
        {totalPrice.toLocaleString()}
        <sup>đ</sup>
      </div>
    </div>
  );
};

export default CartItem;

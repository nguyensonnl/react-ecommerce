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
      if (item.cartQuantity === 1) {
        return;
      } else {
        dispatch(decreaseCart(item));
      }
    }
  };

  const handleRemoveCart = () => {
    const isCheck = window.confirm(
      "Bạn muốn xoá sản phẩm này ra khỏi giỏ hàng?"
    );
    if (isCheck) {
      dispatch(removeCart(item));
    } else {
      return;
    }
  };

  const apiUrl = process.env.REACT_APP_BASE_IMG;
  return (
    <div className="cart__product__item">
      <div className="product__img">
        <img src={`${apiUrl}${item.image}`} alt="product-img" />
      </div>

      <div className="product__main">
        <div className="product__info">
          <div className="product__name">{item.name}</div>
          <div className="product__qty">
            <div className="cart__item-qty">
              <div
                className="cart__item-qty-btn"
                onClick={() => updateQuantity("minus")}
              >
                <i
                  className={
                    item.cartQuantity === 1
                      ? "fa-solid fa-minus disable"
                      : "fa-solid fa-minus"
                  }
                ></i>
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
          <div onClick={() => handleRemoveCart()}>Xóa</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

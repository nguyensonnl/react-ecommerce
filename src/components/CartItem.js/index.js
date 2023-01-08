import React from "react";
import f1 from "../../assets/img/products/f1.jpg";
import "./CartItem.scss";

const CartItem = () => {
  return (
    <>
      <tr className="cart__item">
        <td>
          <i className="far fa-times-circle cart__item-icon"></i>
        </td>
        <td>
          <img src={f1} className="cart__item-img" />
        </td>
        <td>Cartoon T-Shirts</td>
        <td>1.500.000đ</td>
        <td>
          <input type="number" value="1" />
        </td>
        <td>1.500.000đ</td>
      </tr>
      <tr className="cart__item">
        <td>
          <i className="far fa-times-circle cart__item-icon"></i>
        </td>
        <td>
          <img src={f1} className="cart__item-img" />
        </td>
        <td>Cartoon T-Shirts</td>
        <td>1.500.000đ</td>
        <td>
          <input type="number" value="1" />
        </td>
        <td>1.500.000đ</td>
      </tr>
      <tr className="cart__item">
        <td>
          <i className="far fa-times-circle cart__item-icon"></i>
        </td>
        <td>
          <img src={f1} className="cart__item-img" />
        </td>
        <td>Cartoon T-Shirts</td>
        <td>1.500.000đ</td>
        <td>
          <input type="number" value="1" />
        </td>
        <td>1.500.000đ</td>
      </tr>
    </>
  );
};

export default CartItem;

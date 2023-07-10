import React from "react";
import "./AccountSidebar.scss";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AccountSidebar = () => {
  const { customer } = useSelector((state) => state.customer);
  return (
    <div className="account__sidebar">
      <h3 className="account__title">TRANG TÀI KHOẢN</h3>
      <div className="account__name">Xin chào, {customer.firstName}!</div>
      <ul className="account__group">
        <li className="account__item">
          <Link to="/account" className="account__link">
            Thông tin tài khoản
          </Link>
        </li>
        <li className="account__item">
          <Link to="/account/orders" className="account__link">
            Đơn hàng của bạn
          </Link>
        </li>
        <li className="account__item">
          <Link to="/account/change-password" className="account__link">
            Đổi mật khẩu
          </Link>
        </li>
        <li className="account__item">
          <Link to="" className="account__link">
            Số địa chỉ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;

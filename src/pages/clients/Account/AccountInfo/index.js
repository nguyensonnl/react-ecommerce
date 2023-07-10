import React from "react";
import Helmet from "../../../../components/Helmet";
import AccountLayout from "../LayoutAccount";
import Breadcrumb from "../../../../components/Breadcrumb";
import "./AccountInfo.scss";
import { useSelector } from "react-redux";

const AccountInfo = () => {
  const { customer } = useSelector((state) => state.customer);

  return (
    <Helmet title="Trang khách hàng">
      <div className="grid">
        <Breadcrumb title="Trang khách hàng" />
      </div>

      <AccountLayout>
        <div className="account__info">
          <h3 className="title">THÔNG TIN TÀI KHOẢN</h3>
          <div className="account__name">
            <span>Họ tên:</span>
            <span>
              {" "}
              {customer.lastName} {customer.firstName}
            </span>
          </div>
          <div className="account__email">
            <span>Email:</span>
            <span> {customer.email}</span>
          </div>
        </div>
      </AccountLayout>
    </Helmet>
  );
};

export default AccountInfo;

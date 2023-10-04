import React from "react";
import Helmet from "../../../components/Helmet";
import ProfileLayout from "../../../layouts/ProfileLayout";
import Breadcrumb from "../../../components/Breadcrumb";
import { useSelector } from "react-redux";
import "./Info.scss";

const Info = () => {
  const { customer } = useSelector((state) => state.customer);

  return (
    <Helmet title="Trang khách hàng">
      <div className="grid">
        <Breadcrumb title="Trang khách hàng" />
      </div>

      <ProfileLayout>
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
      </ProfileLayout>
    </Helmet>
  );
};

export default Info;

import React from "react";
import ProfileLayout from "../../layouts/ProfileLayout";
import Helmet from "../../components/Helmet";
import Breadcrumb from "../../components/Breadcrumb";

const AccountOrder = () => {
  return (
    <Helmet title="Trang đơn hàng">
      <div className="grid">
        <Breadcrumb title="Đơn hàng" />
      </div>

      <ProfileLayout>
        <div className="account__order">Account Order</div>
      </ProfileLayout>
    </Helmet>
  );
};

export default AccountOrder;

import React from "react";
import AccountLayout from "../LayoutAccount/index";
import Helmet from "../../../../components/Helmet";
import Breadcrumb from "../../../../components/Breadcrumb";

const AccountOrder = () => {
  return (
    <Helmet title="Trang đơn hàng">
      <Breadcrumb title="Đơn hàng" />
      <AccountLayout>
        <div className="account__order">Account Order</div>
      </AccountLayout>
    </Helmet>
  );
};

export default AccountOrder;

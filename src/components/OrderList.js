import React from "react";
import { numberFormat } from "../utils/numberFormat";

const OrderList = ({ item }) => {
  return (
    <div className="order-list">
      <table className="order-table">
        <thead>
          <tr>
            <th>Mã đơn hàng</th>
            <th>Ngày tạo đơn</th>
            <th>Trạng thái</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item._id}</td>
            <td>{item.dateOrdered}</td>
            <td>{item.status}</td>
            <td>{numberFormat(item.totalPrice)}</td>
          </tr>
        </tbody>
      </table>
      <div className="order-action">
        <img src="" alt="image" />
        <button>Hủy đơn</button>
        <button>Xem chi tiết</button>
      </div>
    </div>
  );
};

export default OrderList;

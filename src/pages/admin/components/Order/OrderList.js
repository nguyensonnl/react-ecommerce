import React from "react";
import Pagination from "../../../../components/Pagination";
import Moment from "moment";
import { Link } from "react-router-dom";

const OrderList = ({ orders }) => {
  return (
    <div className="card">
      <div className="card__header">Danh sách đơn hàng</div>
      <div className="card__body">
        {/* <div className="item__control">
          <div className="item__show-record-page">
            <select>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
            <span> records per page</span>
          </div>
          <div className="item__search">
            <span>Search: </span>
            <input
              type="text"
              placeholder="Nhập tên sản phẩm..."
              className="item__search-input"
            />
          </div>
        </div> */}
        <table className="item__list">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.length > 0 &&
              orders.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item?.customer_id?.firstName}</td>
                  <td>{item.status}</td>
                  <td>{Moment(item.dateOrdered).format("d/MM/YYYY")}</td>
                  <td>
                    <Link
                      to={`/admin/order/detail/${item._id}`}
                      className="btn btn-submit"
                      style={{ marginRight: "2px" }}
                    >
                      <i className="fa-solid fa-eye"></i>
                    </Link>
                    <button className="btn-delete">
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* <div className="card__footer">
        <div className="item__show-record">
          Hiển thị từ 1 đến 2 của 2 bản ghi
        </div>
        <div className="item__pagination">
          <Pagination />
        </div>
      </div> */}
    </div>
  );
};

export default OrderList;

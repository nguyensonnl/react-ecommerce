import React from "react";
import Pagination from "../../../../components/Pagination";
import Moment from "moment";

const OrderList = ({ orders }) => {
  return (
    <div className="item__content">
      <div className="item__title">Danh sách đơn hàng</div>
      <div className="item__body">
        <div className="item__control">
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
        </div>
        <table className="item__list">
          <thead>
            <th>#</th>
            <th>ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </thead>
          <tbody>
            {orders &&
              orders.length > 0 &&
              orders.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item?.customer_id._id}</td>
                  <td>{item.status}</td>
                  <td>{Moment(item.dateOrdered).format("d/MM/YYYY")}</td>
                  <td>
                    <button className="btn-edit">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className="btn-delete">
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="item__footer">
          <div className="item__show-record">
            Hiển thị từ 1 đến 2 của 2 bản ghi
          </div>
          <div className="item__pagination">
            <Pagination
            //   totalPosts={listProduct.length}
            //   postsPerPage={pageSize}
            //   setCurrentPage={setCurrentPage}
            //   previousPage={previousPage}
            //   nextPage={nextPage}
            //   activeId={activeId}
            //   setActiveId={setActiveId}
            //   curentPage={curentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;

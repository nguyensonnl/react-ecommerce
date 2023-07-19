import React from "react";
import Layout from "../Layout";
import { useEffect } from "react";
import orderService from "../../../../api/orderService";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Moment from "moment";
import { numberFormat } from "../../../../utils/numberFormat";

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [status, setStatus] = useState();

  const [selected, setSelected] = useState("");
  const [isShow, setIsShow] = useState(true);
  const handleChangeSelect = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    setStatus(status);
    setSelected(status);
    if (status === "Đã nhận hàng") {
      setIsShow(false);
    }
  }, [status]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await orderService.getOrderById(id);
        setOrder(res.data);
        setStatus(res.data.status);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (id) => {
    try {
      if (window.confirm("Bạn thật sự muốn thay đổi đơn này?")) {
        const res = await orderService.updatedOrder(id, { status: selected });
        setStatus(res.data.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  Moment.locale();

  return (
    <Layout>
      <div className="order__detail">
        <div className="order__detail-info">
          <div className="card customer">
            <div className="card__header">Thông tin khách hàng</div>
            <div className="card__body customer__info">
              <div>
                <span>Tên khách hàng: </span>
                <span>
                  {order.customer_id?.lastName} {order?.customer_id?.firstName}
                </span>
              </div>
              <div>
                <span>Email: </span>
                <span>{order.customer_id?.email}</span>
              </div>
              <div>
                <span>Số điện thoại: </span>
                <span>{order.phone}</span>
              </div>
              <div>
                <span>Địa chỉ: </span>
                <span>{order.address}</span>
              </div>
            </div>
          </div>

          <div className="card info">
            <div className="card__header">Thông tin đơn hàng</div>
            <div className="card__body info__order">
              <div>
                <span>Đơn hàng:</span>
                <span> {order._id}</span>
              </div>
              <div>
                <span>Trạng thái:</span>
                <span> {status}</span>
              </div>
              <div>
                <span>Phương thức thanh toán:</span>
                <span> {order.methodPayment}</span>
              </div>
              <div>
                <span>Ngày đặt: </span>
                <span>{Moment(order.dateOrdered).format("lll")}</span>
              </div>
              <div>
                <span>Ghi chú:</span>
                <span> {order.note}</span>
              </div>
              <div>
                <span>Tổng giá tiền:</span>
                <span> {numberFormat(order.totalPrice)} Vnđ</span>
              </div>

              {isShow && (
                <div>
                  <span>Cập nhật trạng thái:</span>
                  <select
                    value={selected}
                    onChange={(e) => handleChangeSelect(e)}
                    style={{ margin: "0 6px" }}
                  >
                    <option value="Đang chờ">Đang chờ</option>
                    <option value="Đang vận chuyển">Đang vận chuyển</option>
                    <option value="Đã nhận hàng">Đã nhận hàng</option>
                    <option value="Hủy">Hủy</option>
                  </select>

                  <button type="submit" onClick={() => handleSubmit(order._id)}>
                    Xác nhận
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="card order__list">
          <div className="card__header">Danh sách đơn hàng</div>
          <div className="card__body">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>ID</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                {order.orderItem_id &&
                  order.orderItem_id.length > 0 &&
                  order.orderItem_id.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.product_id?._id}</td>
                      <td>{item.product_id?.name}</td>
                      <td>{numberFormat(item.product_id?.price)}</td>
                      <td>{item.quantity}</td>
                      <td>
                        {numberFormat(item.product_id?.price * item.quantity)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetail;

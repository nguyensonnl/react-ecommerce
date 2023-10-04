import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import ProfileLayout from "../../../layouts/ProfileLayout";
import Helmet from "../../../components/Helmet";
import Breadcrumb from "../../../components/Breadcrumb";
import orderService from "../../../api/orderService";
import OrderList from "../../../components/OrderList";

import "./Order.scss";

const Order = () => {
  const customer = useSelector((state) => state.customer.customer);
  const [orders, setOrders] = useState([]);
  const [activeBtn, setActiveBtn] = useState(false);

  useEffect(() => {
    getListOrder();
  }, []);

  const getListOrder = async () => {
    try {
      const res = await orderService.getOrdersByCustomer(customer._id);
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getListOrderStatus = async (type) => {
    const url = process.env.REACT_APP_BASE_URL;

    try {
      const res = await axios.get(
        `${url}/orders/customer/${customer._id}?status=${type}`
      );
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCLick = async (type) => {
    if (type === "all") {
      getListOrder();
      setActiveBtn(!activeBtn);
    } else {
      getListOrderStatus(type);
      setActiveBtn(!activeBtn);
    }
  };

  return (
    <Helmet title="Trang đơn hàng">
      <div className="grid">
        <Breadcrumb title="Đơn hàng" />
      </div>

      <ProfileLayout>
        <div className="account__order">
          <ul className="order__heading">
            <li className="order__heading__list">
              <button
                className="order-btn"
                onClick={() => {
                  handleCLick("all");
                }}
              >
                Tất cả
              </button>
            </li>
            <li className="order__heading__list">
              <button
                className="order-btn"
                onClick={() => {
                  handleCLick("pending");
                }}
              >
                Chờ xác nhận
              </button>
            </li>
            <li className="order__heading__list">
              <button
                className="order-btn"
                onClick={() => {
                  handleCLick("delivery");
                }}
              >
                Đang giao
              </button>
            </li>
            <li className="order__heading__list">
              <button
                className="order-btn"
                onClick={() => {
                  handleCLick("success");
                }}
              >
                Đã giao
              </button>
            </li>
            <li className="order__heading__list">
              <button
                className="order-btn"
                onClick={() => {
                  handleCLick("cancelled");
                }}
              >
                Đã hủy
              </button>
            </li>
          </ul>

          {orders && orders.length === 0 && <div>Không tìm thấy đơn nào</div>}

          {orders &&
            orders.length > 0 &&
            orders.map((item, index) => (
              <OrderList item={item} key={item._id} />
            ))}
        </div>
      </ProfileLayout>
    </Helmet>
  );
};

export default Order;

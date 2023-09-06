import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import ProfileLayout from "../../../layouts/ProfileLayout";
import Helmet from "../../../components/Helmet";
import Breadcrumb from "../../../components/Breadcrumb";
import orderService from "../../../api/orderService";
import { useSelector } from "react-redux";
import OrderList from "../../../components/OrderList";
import axios from "axios";

const AccountOrder = () => {
  const customer = useSelector((state) => state.customer.customer);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await orderService.getOrdersByCustomer(customer._id);
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleCLick = async (type) => {
    if (type === "all") {
      try {
        const res = await orderService.getOrdersByCustomer(customer._id);
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios.get(
          `http://localhost:5050/api/v1/orders/customer/${customer._id}?status=${type}`
        );

        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
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
                className={({ isActive }) =>
                  isActive ? "order__link active" : "order__link"
                }
                onClick={() => {
                  handleCLick("all");
                }}
              >
                Tất cả
              </button>
            </li>
            <li className="order__heading__list">
              <button
                to="/account/orders"
                className={({ isActive }) =>
                  isActive ? "order__link active" : "order__link"
                }
                onClick={() => {
                  handleCLick("pending");
                }}
              >
                Chờ xác nhận
              </button>
            </li>
            <li className="order__heading__list">
              <button
                className={({ isActive }) =>
                  isActive ? "order__link active" : "order__link"
                }
                onClick={() => {
                  handleCLick("delivery");
                }}
              >
                Đang giao
              </button>
            </li>
            <li className="order__heading__list">
              <button
                to="/account/orders"
                className={({ isActive }) =>
                  isActive ? "order__link active" : "order__link"
                }
                onClick={() => {
                  handleCLick("success");
                }}
              >
                Đã giao
              </button>
            </li>
            <li className="order__heading__list">
              <button
                to="/account/orders"
                className={({ isActive }) =>
                  isActive ? "order__link active" : "order__link"
                }
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

export default AccountOrder;

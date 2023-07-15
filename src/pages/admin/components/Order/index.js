import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import orderService from "../../../../api/orderService";
import OrderList from "./OrderList";

const Orders = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await orderService.getAllOrders();
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, []);

  //1. Các component lồng nhau sử dụng state isShow truyền từ parent to child
  //2. Sử dụng outlet of react router
  //3. Theo link thì component khác nhau

  return (
    <Layout>
      <div className="admin__order">
        <div className="item__header">
          <h2>ĐƠN HÀNG</h2>
        </div>
        <OrderList orders={orders} />
      </div>
    </Layout>
  );
};

export default Orders;

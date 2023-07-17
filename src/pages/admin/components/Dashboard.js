import { useEffect, useState } from "react";
import Layout from "./Layout";
import productApi from "../../../api/productApi";
import orderService from "../../../api/orderService";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resProduct = await productApi.getAllProduct();
        setProducts(resProduct.data.data.productList);
        const resOrder = await orderService.getAllOrders();
        setOrders(resOrder.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="admin__dashboard">
        <div className="">
          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card__header">Sản phẩm</div>
                <div className="card__body">
                  Tổng sản phẩm: {products.length}
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card text-bg-light mb-3">
                <div className="card">
                  <div className="card__header">Đơn hàng</div>
                  <div className="card__body">
                    Tổng đơn hàng: {orders.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

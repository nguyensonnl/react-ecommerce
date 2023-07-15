import axiosClient from "./axiosClient";
const orderService = {};

orderService.createNewOrder = (data) => {
  const url = `/orders`;
  return axiosClient.post(url, data);
};

orderService.getAllOrders = () => {
  const url = `/orders`;
  return axiosClient.get(url);
};

orderService.getOrderById = (id) => {
  const url = `/orders/${id}`;
  return axiosClient.get(url);
};

orderService.updatedOrder = (id, data) => {
  const url = `/orders/${id}`;
  return axiosClient.put(url, data);
};

export default orderService;

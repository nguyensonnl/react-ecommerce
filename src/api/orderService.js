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

export default orderService;

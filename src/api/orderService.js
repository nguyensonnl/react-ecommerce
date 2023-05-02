import axiosClient from "./axiosClient";

const orderService = {
  createNewOrder(data) {
    const url = `/orders`;
    return axiosClient.post(url, data);
  },
};

export default orderService;

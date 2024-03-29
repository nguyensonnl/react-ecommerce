import axiosClient from "./axiosClient";

const customerService = {
  register(data) {
    const url = `/customers/register`;
    return axiosClient.post(url, data);
  },

  login(data) {
    const url = `/customers/login`;
    return axiosClient.post(url, data);
  },

  getAllCustomer() {
    const url = `/customers`;
    return axiosClient.get(url);
  },
};

export default customerService;

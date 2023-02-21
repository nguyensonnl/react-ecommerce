import axiosClient from "./axiosClient";

const brandApi = {
  getAllBrand() {
    const url = `/brands`;
    return axiosClient.get(url);
  },
};

export default brandApi;

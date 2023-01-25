import axiosClient from "./axiosClient";

const productApi = {
  getProductFeatured(params) {
    const url = `/products/get/featured/${params}`;
    return axiosClient.get(url);
  },
};

export default productApi;

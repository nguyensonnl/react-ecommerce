import axiosClient from "./axiosClient";

const productApi = {
  getProductFeatured(params) {
    const url = `/products/get/featured/${params}`;
    return axiosClient.get(url);
  },

  getAllProduct() {
    const url = `/products`;
    return axiosClient.get(url);
  },

  getProductById(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;

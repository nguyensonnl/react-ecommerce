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

  createProduct(data) {
    const url = "/products";
    return axiosClient.post(url, data);
  },

  deleteProduct(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },

  getAllBrand() {
    const url = "/brands";
    return axiosClient.get(url);
  },

  getAllCategory() {
    const url = "/categories";
    return axiosClient.get(url);
  },
};

export default productApi;

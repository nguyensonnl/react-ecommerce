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

  getProductBySlug(slug) {
    const url = `products/${slug}`;
    return axiosClient.get(url);
  },
  getProductByCate(cate, limit) {
    const url = `/products?limit=${limit}&&categories=${cate}`;
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

  getBrand() {
    const url = "/brands";
    return axiosClient.get(url);
  },
  getBrandById(id) {
    const url = `/brands/${id}`;
    return axiosClient.get(url);
  },

  getCategory() {
    const url = "/categories";
    return axiosClient.get(url);
  },
  getCategoryById(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;

import axiosClient from "./axiosClient";

const productService = {
  getProductFeatured(params) {
    const url = `/products/get/featured/${params}`;
    return axiosClient.get(url);
  },
  getAllProduct(query = " ") {
    const url = `/products${query}`;
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
};

export default productService;

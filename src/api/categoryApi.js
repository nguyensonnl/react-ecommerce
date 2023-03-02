import axiosClient from "./axiosClient";

const categoryApi = {
  getAllCateogry() {
    const url = `/categories`;
    return axiosClient.get(url);
  },

  getCategoryById(cateId) {
    const url = `/categories/${cateId}`;
    return axiosClient.get(url);
  },
};

export default categoryApi;

import axiosClient from "./axiosClient";

const categoryService = {};

categoryService.getAllCategory = () => {
  const url = "/categories";
  return axiosClient.get(url);
};

categoryService.getCategoryById = (cateId) => {
  const url = `/categories/${cateId}`;
  return axiosClient.get(url);
};

categoryService.createdCategory = (data) => {
  const url = "/categories";
  return axiosClient.post(url, data);
};

categoryService.updatedCategory = (id, data) => {
  const url = `/categories/${id}`;
  return axiosClient.put(url, data);
};

categoryService.deletedCategory = (id) => {
  const url = `/categories/${id}`;
  return axiosClient.delete(url);
};

export default categoryService;

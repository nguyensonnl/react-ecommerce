import axiosClient from "./axiosClient";
const brandService = {};

brandService.getAllBrand = () => {
  const url = "/brands";
  return axiosClient.get(url);
};

brandService.getBrandByID = (id) => {
  const url = `/brands/${id}`;
  return axiosClient.get(url);
};

brandService.createdBrand = (data) => {
  const url = "/brands";
  return axiosClient.post(url, data);
};

brandService.updatedBrand = (id, data) => {
  const url = `/brands/${id}`;
  return axiosClient.put(url, data);
};

brandService.deletedBrand = (id) => {
  const url = `/brands/${id}`;
  return axiosClient.delete(url);
};

export default brandService;

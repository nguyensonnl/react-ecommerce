import axiosClient from "./axiosClient";
const uploadSerivce = {};

uploadSerivce.singleFile = (data) => {
  const url = `/upload`;
  return axiosClient.post(url, data);
};

uploadSerivce.multipleFile = (data) => {
  const url = `/upload/collection`;
  return axiosClient.post(url, data);
};

export default uploadSerivce;

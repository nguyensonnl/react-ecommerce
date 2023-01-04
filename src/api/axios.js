import axios from "axios";

const axiosCommom = () => {
  axios.defaults.baseURL = "http://localhost:3001";
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("accessToken")}`;
};

export default axiosCommom;

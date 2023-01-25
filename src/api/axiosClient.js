import axios from "axios";

// const axiosCommom = () => {
//   axios.defaults.baseURL = "http://localhost:3001";
//   axios.defaults.headers.common[
//     "Authorization"
//   ] = `Bearer ${localStorage.getItem("accessToken")}`;
// };

// export default axiosCommom;

const axiosClient = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

//Interceptors: Làm tất cả gì đó cho request

export default axiosClient;

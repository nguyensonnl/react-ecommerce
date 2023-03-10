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
    //"Content-Type": "multipart/form-data",
    "Content-Type": "application/json",
    // Authorization: `Bearer ${localStorage.getItem("abc")} `,
  },
});

//Interceptors: Làm tất cả gì đó cho request
axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;

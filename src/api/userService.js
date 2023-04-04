import axiosClient from "./axiosClient";

const userService = {
  login(data) {
    const url = `/users/login`;
    return axiosClient.post(url, data);
  },
};

export default userService;

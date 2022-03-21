import axios from "./axios";

export interface response {
  list: [];
  msg: [];
}

const api = {
  post: (url: string, data: any) => {
    return axios.post(url, data);
  },
  senccode: (phone: string) => {
    return axios.post("common/sendcode", { phone: phone });
  },
};

export default api;

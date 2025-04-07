import axios from "axios";

const token = localStorage.getItem("token");
const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});

export const setToken = (token) => {
  localStorage.setItem("token", token);
  httpRequest.defaults.headers["Authorization"] = `Bearer ${token}`;
};

export const clearToken = () => {
  localStorage.removeItem("token");
  delete httpRequest.defaults.headers["Authorization"];
};

const send = async (method, url, data, config) => {
  try {
    const response = await httpRequest.request({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    if (error?.response?.status === 401) {
      clearToken();
    }
  }
};

export const get = (url, config) => {
  return send("get", url, null, config);
};

export const post = (url, data, config) => {
  return send("post", url, data, config);
};

export const put = (url, data, config) => {
  return send("put", url, data, config);
};

export const patch = (url, data, config) => {
  return send("patch", url, data, config);
};

export const del = (url, config) => {
  return send("delete", url, null, config);
};

export default {
  get,
  post,
  put,
  patch,
  del,
  setToken,
  clearToken,
};

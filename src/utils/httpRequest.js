import axios from "axios";

let isRefreshing = false;
let tokenListeners = [];

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

httpRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

httpRequest.interceptors.response.use(
  (response) => response,
  async (error) => {
    const refreshToken = localStorage.getItem("refresh_token");
    const shouldRenewToken = error.response?.status === 401 && refreshToken;

    if (shouldRenewToken) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const res = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/auth/refresh-token`,
            {
              refresh_token: refreshToken,
            }
          );
          const data = res.data.data;

          localStorage.setItem("token", data.access_token);
          localStorage.setItem("refresh_token", data.refresh_token);

          tokenListeners.forEach((listener) => listener());
          tokenListeners = [];

          isRefreshing = false;

          return httpRequest(error.config);
        } catch (error) {
          isRefreshing = false;

          tokenListeners = [];

          localStorage.removeItem("token");
          localStorage.removeItem("refresh_token");
        }
      } else {
        return new Promise((resolve) => {
          tokenListeners.push(() => {
            resolve(httpRequest(error.config));
          });
        });
      }
    }

    return Promise.reject(error);
  }
);

export const clearToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  delete httpRequest.defaults.headers["Authorization"];
};

const send = async (method, url, data, config) => {
  const isPutOrPatch = ["put", "patch"].includes(method.toLowerCase());
  const effectiveMethod = isPutOrPatch ? "post" : method;
  const effectivePath = isPutOrPatch
    ? `${url}${url.includes("?") ? "&" : "?"}_method=${method}`
    : url;
  try {
    const response = await httpRequest.request({
      method: effectiveMethod,
      url: effectivePath,
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
  clearToken,
};

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Axios instance with or without authentication
const createInstance = (withAuth: boolean = true) => {
  const instance = axios.create({
    baseURL: `${process.env.API_BASE_URL}/api`,
    timeout: 30000,
  });

  instance.interceptors.request.use(async (request) => {
    request.headers["Content-Type"] = "application/json";
    return request;
  });

  return instance;
};

export const AxiosInstanceWithAuth = async <T = unknown>(
  config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const instance = createInstance(true); // With authentication
  return instance(config);
};

export const AxiosInstanceWithoutAuth = async <T = unknown>(
  config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const instance = createInstance(false); // Without authentication
  return instance(config);
};

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const createInstance = (withAuth: boolean = true) => {
    const instance = axios.create({
        baseURL: `${process.env.API_BASE_URL}/api`,
        timeout: 3000
    });

    instance.interceptors.request.use(async (request) => {
        request.headers["Content-Type"] = "application/json";
        return request;
    });

    return instance;
};

export const AxiosInstanceWithAuth = async <T = unknown>(
    config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> =>{
    const instance = createInstance(true);
    return instance(config);
};

export const AxiosInstanceWithoutAuth = async <T = unknown>(
    config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
    const instance = createInstance(false);
    return instance(config);
};


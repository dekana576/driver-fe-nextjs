"use server";
import {
  ICreateDriverRequest,
  IDriver,
  IUpdateDriverRequest,
} from "@/types/driver.types";
import { IBaseResponse } from "@/types/response.type";
import { AxiosInstanceWithoutAuth } from "../axios-instance";

export const getDriverList = async (search?: string) => {
  try {
    const response = await AxiosInstanceWithoutAuth<IBaseResponse<IDriver[]>>({
      method: "GET",
      url: `/drivers`,
      params: search ? { search } : {},
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDriverById = async (driverId: string) => {
  try {
    const response = await AxiosInstanceWithoutAuth<IBaseResponse<IDriver>>({
      method: "GET",
      url: `/drivers/${driverId}`,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createDriver = async (body: ICreateDriverRequest) => {
  try {
    const response = await AxiosInstanceWithoutAuth<IBaseResponse<IDriver>>({
      method: "POST",
      url: `/drivers`,
      data: body,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateDriver = async ({
  driverId,
  body,
}: {
  driverId: string;
  body: IUpdateDriverRequest;
}) => {
  try {
    const response = await AxiosInstanceWithoutAuth<IBaseResponse<IDriver>>({
      method: "PUT",
      url: `/drivers/${driverId}`,
      data: body,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteDriver = async (driverId: string) => {
  try {
    const response = await AxiosInstanceWithoutAuth<IBaseResponse<IDriver>>({
      method: "DELETE",
      url: `/drivers/${driverId}`,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

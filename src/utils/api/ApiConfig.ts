import { getAuth } from "firebase/auth";
import {
  Configuration,
  ErrorResponse,
  ResponseError,
} from "openapi/api-client/src";

import { config } from "@/config/config";

import { ApiError } from "../error/ApiError";

export const getApiConfig = async () => {
  const user = getAuth().currentUser;
  const bearer = await user?.getIdToken();
  return new Configuration({
    basePath: config.API_BASE_URL,
    accessToken: bearer,
  });
};

export const getTenantUid = () => {
  return "demo";
};

export const handleApiError = async (e: ResponseError) => {
  const error = (await e.response.json()) as ErrorResponse;
  return new ApiError(error.displayMessage, error);
};

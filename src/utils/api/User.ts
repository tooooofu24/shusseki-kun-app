import { ResponseError, UserApi } from "openapi/api-client/src";

import { getApiConfig, getTenantUid, handleApiError } from "./ApiConfig";

export const getUsers = async () => {
  const config = await getApiConfig();
  const api = new UserApi(config);
  const response = await api
    .getUsers({
      xTenantUID: getTenantUid(),
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
  return response.data ?? [];
};

export const deleteUser = async (id: number) => {
  const config = await getApiConfig();
  const api = new UserApi(config);
  await api
    .deleteUser({
      xTenantUID: getTenantUid(),
      id,
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
};

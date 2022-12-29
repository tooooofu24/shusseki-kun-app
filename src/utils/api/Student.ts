import { ResponseError, StudentApi } from "openapi/api-client/src";

import { getApiConfig, getTenantUid, handleApiError } from "./ApiConfig";

export const getStudents = async () => {
  const config = await getApiConfig();
  const api = new StudentApi(config);
  const response = await api
    .getStudents({
      xTenantUID: getTenantUid(),
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
  return response.data ?? [];
};

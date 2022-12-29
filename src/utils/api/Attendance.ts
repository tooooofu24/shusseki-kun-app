import { AttendanceApi, ResponseError } from "openapi/api-client/src";

import { getApiConfig, getTenantUid, handleApiError } from "./ApiConfig";

export const getAttendances = async () => {
  const config = await getApiConfig();
  const api = new AttendanceApi(config);
  const response = await api
    .getAttendances({
      xTenantUID: getTenantUid(),
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
  return response.data ?? [];
};

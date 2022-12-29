import { ResponseError, ScheduleApi } from "openapi/api-client/src";

import { getApiConfig, getTenantUid, handleApiError } from "./ApiConfig";

export const getSchedules = async () => {
  const config = await getApiConfig();
  const api = new ScheduleApi(config);
  const response = await api
    .getSchedules({
      xTenantUID: getTenantUid(),
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
  return response.data ?? [];
};

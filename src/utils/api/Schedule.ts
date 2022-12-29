import { ScheduleApi } from "openapi/api-client/src";

import { getApiConfig, getTenantUid } from "./ApiConfig";

export const getSchedules = async () => {
  const config = await getApiConfig();
  const api = new ScheduleApi(config);
  const response = await api.getSchedules({
    xTenantUID: getTenantUid(),
  });
  return response.data ?? [];
};

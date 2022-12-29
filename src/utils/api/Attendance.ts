import { AttendanceApi } from "openapi/api-client/src";

import { getApiConfig, getTenantUid } from "./ApiConfig";

export const getAttendances = async () => {
  const config = await getApiConfig();
  const api = new AttendanceApi(config);
  const response = await api.getAttendances({
    xTenantUID: getTenantUid(),
  });
  return response.data ?? [];
};

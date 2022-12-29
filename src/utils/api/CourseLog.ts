import { CourseLogApi } from "openapi/api-client/src";

import { getApiConfig, getTenantUid } from "./ApiConfig";

export const getCourseLogs = async () => {
  const config = await getApiConfig();
  const api = new CourseLogApi(config);
  const response = await api.getCourseLogs({
    xTenantUID: getTenantUid(),
  });
  return response.data ?? [];
};

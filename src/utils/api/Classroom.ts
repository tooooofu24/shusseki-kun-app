import { ClassroomApi } from "openapi/api-client/src";

import { getApiConfig, getTenantUid } from "./ApiConfig";

export const getClassrooms = async () => {
  const config = await getApiConfig();
  const api = new ClassroomApi(config);
  const json = await api.getClassrooms({
    xTenantUID: getTenantUid(),
  });
  return json.data ?? [];
};

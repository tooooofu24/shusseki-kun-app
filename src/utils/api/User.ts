import { UserApi } from "openapi/api-client/src";

import { getApiConfig, getTenantUid } from "./ApiConfig";

export const getUsers = async () => {
  const config = await getApiConfig();
  const api = new UserApi(config);
  const response = await api.getUsers({
    xTenantUID: getTenantUid(),
  });
  return response.data ?? [];
};

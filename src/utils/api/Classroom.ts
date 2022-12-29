import { ClassroomApi, ResponseError } from "openapi/api-client/src";

import { getApiConfig, getTenantUid, handleApiError } from "./ApiConfig";

export const getClassrooms = async () => {
  const config = await getApiConfig();
  const api = new ClassroomApi(config);
  const json = await api
    .getClassrooms({
      xTenantUID: getTenantUid(),
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
  return json.data ?? [];
};

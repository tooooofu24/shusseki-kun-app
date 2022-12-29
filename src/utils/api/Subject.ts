import { ResponseError, SubjectApi } from "openapi/api-client/src";

import { getApiConfig, getTenantUid, handleApiError } from "./ApiConfig";

export const getSubjects = async () => {
  const config = await getApiConfig();
  const api = new SubjectApi(config);
  const response = await api
    .getSubjects({
      xTenantUID: getTenantUid(),
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
  return response.data ?? [];
};

import {
  GetStudentsRequest,
  ResponseError,
  StudentApi,
} from "openapi/api-client/src";

import { getApiConfig, getTenantUid, handleApiError } from "./ApiConfig";

export const getStudents = async (
  props: Omit<GetStudentsRequest, "xTenantUID">
) => {
  const config = await getApiConfig();
  const api = new StudentApi(config);
  const response = await api
    .getStudents({
      xTenantUID: getTenantUid(),
      ...props,
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
  return response.data ?? [];
};

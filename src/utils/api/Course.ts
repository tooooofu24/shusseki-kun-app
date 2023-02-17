import { CourseApi, ResponseError } from "openapi/api-client/src";

import { getApiConfig, getTenantUid, handleApiError } from "./ApiConfig";

export const getCourses = async () => {
  const config = await getApiConfig();
  const api = new CourseApi(config);
  const json = await api
    .getCourses({
      xTenantUID: getTenantUid(),
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
  return json.data ?? [];
};

export const findCourse = async (id: number) => {
  const config = await getApiConfig();
  const api = new CourseApi(config);
  const json = await api.findCourse({ xTenantUID: getTenantUid(), id });
  return json.data;
};

import {
  CourseLogApi,
  PostCourseLogsRequest,
  ResponseError,
} from "openapi/api-client/src";

import { getApiConfig, getTenantUid, handleApiError } from "./ApiConfig";

export const getCourseLogs = async () => {
  const config = await getApiConfig();
  const api = new CourseLogApi(config);
  const response = await api
    .getCourseLogs({
      xTenantUID: getTenantUid(),
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
  return response.data ?? [];
};

export const postCourseLog = async (props: PostCourseLogsRequest) => {
  const config = await getApiConfig();
  const api = new CourseLogApi(config);
  await api
    .postCourseLogs({
      xTenantUID: getTenantUid(),
      postCourseLogsRequest: props,
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
};

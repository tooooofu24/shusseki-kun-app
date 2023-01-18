import {
  PostScheduleRequest,
  ResponseError,
  ScheduleApi,
} from "openapi/api-client/src";

import { getApiConfig, getTenantUid, handleApiError } from "./ApiConfig";

export const getSchedules = async () => {
  const config = await getApiConfig();
  const api = new ScheduleApi(config);
  const response = await api
    .getSchedules({
      xTenantUID: getTenantUid(),
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
  return response.data ?? [];
};

export const postSchedule = async (props: PostScheduleRequest) => {
  const config = await getApiConfig();
  const api = new ScheduleApi(config);
  const response = await api
    .postSchedule({
      xTenantUID: getTenantUid(),
      postScheduleRequest: props,
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
  return response.data ?? null;
};

export const deleteSchedule = async (id: number) => {
  const config = await getApiConfig();
  const api = new ScheduleApi(config);
  await api
    .deleteSchedule({
      xTenantUID: getTenantUid(),
      id,
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
};

import {
  InvitationApi,
  PostInvitationRequest,
  ResponseError,
} from "openapi/api-client/src";

import { getApiConfig, getTenantUid, handleApiError } from "./ApiConfig";

export const getInvitations = async () => {
  const config = await getApiConfig();
  const api = new InvitationApi(config);
  const response = await api
    .getInvitations({
      xTenantUID: getTenantUid(),
      accept: true,
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
  return response.data ?? [];
};

export const postInvitation = async (props: PostInvitationRequest) => {
  const { email } = props;
  const config = await getApiConfig();
  const api = new InvitationApi(config);
  const response = await api
    .postInvitation({
      xTenantUID: getTenantUid(),
      postInvitationRequest: {
        email,
      },
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
  return response.data ?? null;
};

export const deleteInvitation = async (id: number) => {
  const config = await getApiConfig();
  const api = new InvitationApi(config);
  await api
    .deleteInvitation({
      xTenantUID: getTenantUid(),
      id,
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
};

export const sendInvitationMail = async (id: number) => {
  const config = await getApiConfig();
  const api = new InvitationApi(config);
  await api
    .sendInvitationMail({
      xTenantUID: getTenantUid(),
      id,
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
};

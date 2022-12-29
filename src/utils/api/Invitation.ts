import { InvitationApi, PostInvitationRequest } from "openapi/api-client/src";

import { getApiConfig, getTenantUid } from "./ApiConfig";

export const getInvitations = async () => {
  const config = await getApiConfig();
  const api = new InvitationApi(config);
  const response = await api.getInvitations({
    xTenantUID: getTenantUid(),
    accept: true,
  });
  return response.data ?? [];
};

export const postInvitation = async (props: PostInvitationRequest) => {
  const { email } = props;
  const config = await getApiConfig();
  const api = new InvitationApi(config);
  const response = await api.postInvitation({
    xTenantUID: getTenantUid(),
    postInvitationRequest: {
      email,
    },
  });
  return response.data ?? null;
};

export const deleteInvitation = async (id: number) => {
  const config = await getApiConfig();
  const api = new InvitationApi(config);
  await api.deleteInvitation({
    xTenantUID: getTenantUid(),
    id,
  });
};

export const sendInvitationMail = async (id: number) => {
  const config = await getApiConfig();
  const api = new InvitationApi(config);
  await api.sendInvitationMail({
    xTenantUID: getTenantUid(),
    id,
  });
};

import { ResponseError } from "openapi/api-client/src";
import { IPAddressApi } from "openapi/api-client/src/apis/IPAddressApi";

import { getApiConfig, getTenantUid, handleApiError } from "./ApiConfig";

export const getIPAddresses = async () => {
  const config = await getApiConfig();
  const api = new IPAddressApi(config);
  const response = await api
    .getIpAddresses({
      xTenantUID: getTenantUid(),
    })
    .catch(async (e: ResponseError) => {
      throw await handleApiError(e);
    });
  return response.data ?? [];
};

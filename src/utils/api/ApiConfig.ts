import { getAuth } from "firebase/auth";
import { Configuration } from "openapi/api-client/src";

import { config } from "@/config/config";

export const getApiConfig = async () => {
  const user = getAuth().currentUser;
  const bearer = await user?.getIdToken();
  return new Configuration({
    basePath: config.API_BASE_URL,
    accessToken: bearer,
  });
};

export const getTenantUid = () => {
  return "demo";
};

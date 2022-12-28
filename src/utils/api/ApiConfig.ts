import { getAuth } from "firebase/auth";
import { Configuration } from "openapi/api-client/src";

export const getApiConfig = async () => {
  const user = getAuth().currentUser;
  const bearer = await user?.getIdToken();
  return new Configuration({
    basePath: "https://dev.api.shusseki-kun.com",
    accessToken: bearer,
  });
};

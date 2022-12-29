import { IPAddressApi } from "openapi/api-client/src/apis/IPAddressApi";

import { getApiConfig, getTenantUid } from "./ApiConfig";

export const getIPAddresses = async () => {
	const config = await getApiConfig();
	const api = new IPAddressApi(config);
	const response = await api.getIpAddresses({
		xTenantUID: getTenantUid(),
	});
	return response.data ?? [];
};

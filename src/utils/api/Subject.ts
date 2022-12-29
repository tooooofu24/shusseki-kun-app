import { SubjectApi } from "openapi/api-client/src";

import { getApiConfig, getTenantUid } from "./ApiConfig";

export const getSubjects = async () => {
	const config = await getApiConfig();
	const api = new SubjectApi(config);
	const response = await api.getSubjects({
		xTenantUID: getTenantUid(),
	});
	return response.data ?? [];
};

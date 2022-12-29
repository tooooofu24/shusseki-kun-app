import { StudentApi } from "openapi/api-client/src";

import { getApiConfig, getTenantUid } from "./ApiConfig";

export const getSchedules = async () => {
	const config = await getApiConfig();
	const api = new StudentApi(config);
	const response = await api.getStudents({
		xTenantUID: getTenantUid(),
	});
	return response.data ?? [];
};

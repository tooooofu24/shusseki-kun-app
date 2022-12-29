import { fetcher } from "../fetcher";

export const getIPAddresses = async () => {
	const json = await fetcher({ uri: "/ip-addresses", method: "GET" });
	return json.results;
};

export const deleteIPAddress = async (id: number) => {
	await fetcher({ uri: `/ip-addresses/${id}`, method: "DELETE" });
	return;
};

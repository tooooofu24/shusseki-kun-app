import { fetcher } from "../fetcher";

export const getUsers = async () => {
	const json = await fetcher({ uri: "/users", method: "GET" });
	return json.results;
};

export const deleteUser = async (id: number) => {
	await fetcher({ uri: `/users/${id}`, method: "DELETE" });
	return;
};

import { fetcher } from "../fetcher";

export const getInvitations = async () => {
	const json = await fetcher({
		uri: "/invitations",
		method: "GET",
		query: { accept: "0" },
	});
	return json.results;
};

type AddInvitationProps = {
	email: string;
};
export const addInvitation = async ({ email }: AddInvitationProps) => {
	const json = await fetcher({
		uri: "/invitations",
		method: "POST",
		body: { email },
	});
	return json.result;
};

export const deleteInvitation = async (id: number) => {
	await fetcher({ uri: `/invitations/${id}`, method: "DELETE" });
	return;
};

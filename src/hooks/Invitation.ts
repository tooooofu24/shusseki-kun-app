import { atom, useAtom } from "jotai";
import { Invitation } from "openapi/api-client/src";

import { getInvitations } from "@/utils/api/Invitation";

const versionAtom = atom(0);

const invitationsAtom = atom<Promise<Invitation[]> | []>(async (get) => {
	get(versionAtom);
	return getInvitations();
});

export const useInvitations = () => {
	const [invitations] = useAtom(invitationsAtom);
	const [version, setVersion] = useAtom(versionAtom);
	const refetch = () => {
		setVersion(version + 1);
	};
	return {
		invitations,
		refetch,
	};
};

import { atom, useAtom } from "jotai";

import { User } from "@/types/User";
import { getUsers } from "@/utils/api/User";

const versionAtom = atom(0);

const usersAtom = atom<Promise<User[]> | []>(async (get) => {
	get(versionAtom);
	const users = getUsers();
	return users;
});

export const useUsers = () => {
	const [users] = useAtom(usersAtom);
	const [version, setVersion] = useAtom(versionAtom);
	const refetch = () => {
		setVersion(version + 1);
	};
	return {
		users,
		refetch,
	};
};

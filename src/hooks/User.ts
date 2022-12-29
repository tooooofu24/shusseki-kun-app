import { atom, useAtom } from "jotai";
import { User } from "openapi/api-client/src";

import { getUsers } from "@/utils/api/User";

const versionAtom = atom(0);

const usersAtom = atom<Promise<User[]> | []>(async (get) => {
  get(versionAtom);
  return getUsers();
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

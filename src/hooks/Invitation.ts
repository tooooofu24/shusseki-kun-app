import { atom, useAtom } from "jotai";

import { Invitation } from "@/types/Invitation";
import { getInvitations } from "@/utils/api/Invitation";

const versionAtom = atom(0);

const invitationsAtom = atom<Promise<Invitation[]> | []>(async (get) => {
  get(versionAtom);
  const invitations = getInvitations();
  return invitations;
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

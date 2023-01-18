import { atom, useAtom } from "jotai";
import { Subject } from "openapi/api-client/src";

import { getSubjects } from "@/utils/api/Subject";

const versionAtom = atom(0);

const subjectsAtom = atom<Promise<Subject[]> | []>(async (get) => {
  get(versionAtom);
  return getSubjects();
});

export const useSubjects = () => {
  const [subjects] = useAtom(subjectsAtom);
  const [version, setVersion] = useAtom(versionAtom);
  const refetch = () => {
    setVersion(version + 1);
  };
  return {
    subjects,
    refetch,
  };
};

import { atom, useAtom } from "jotai";

import { Classroom } from "@/types/Classroom";
import { getClassrooms } from "@/utils/api/Classroom";

const versionAtom = atom(0);

const classroomsAtom = atom<Promise<Classroom[]> | []>(async (get) => {
  get(versionAtom);
  const users = getClassrooms();
  return users;
});

export const useClassrooms = () => {
  const [classrooms] = useAtom(classroomsAtom);
  const [version, setVersion] = useAtom(versionAtom);
  const refetch = () => {
    setVersion(version + 1);
  };
  return {
    classrooms,
    refetch,
  };
};

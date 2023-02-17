import deepEqual from "fast-deep-equal";
import { atom, useAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import { ClassroomWithCourse } from "openapi/api-client/src";

import { findClassroom, getClassrooms } from "@/utils/api/Classroom";

const versionAtom = atom(0);

const classroomsAtom = atom<Promise<ClassroomWithCourse[]> | []>(
  async (get) => {
    get(versionAtom);
    return getClassrooms();
  }
);

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

const classroomFamilyAtom = atomFamily(
  (id: number | undefined) =>
    atom<Promise<ClassroomWithCourse | null> | null>((get) => {
      get(versionAtom);
      if (!id) return null;
      return findClassroom(id);
    }),
  deepEqual
);

export const useClassroom = (id: number | undefined) => {
  const [classroom] = useAtom(classroomFamilyAtom(id));
  const [version, setVersion] = useAtom(versionAtom);
  const refetch = () => {
    setVersion(version + 1);
  };
  return {
    classroom,
    refetch,
  };
};

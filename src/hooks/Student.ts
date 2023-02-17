import deepEqual from "fast-deep-equal";
import { atom, useAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import { Student } from "openapi/api-client/src";

import { getStudents } from "@/utils/api/Student";

const versionAtom = atom(0);

const studentsByCourseIdFamilyAtom = atomFamily(
  (courseId: number | undefined) =>
    atom<Promise<Student[]> | []>((get) => {
      get(versionAtom);
      if (!courseId) return [];
      return getStudents({ courseId });
    }),
  deepEqual
);

export const useStudentsByCourseId = (courseId: number | undefined) => {
  const [students] = useAtom(studentsByCourseIdFamilyAtom(courseId));
  const [version, setVersion] = useAtom(versionAtom);
  const refetch = () => {
    setVersion(version + 1);
  };
  return {
    students,
    refetch,
  };
};

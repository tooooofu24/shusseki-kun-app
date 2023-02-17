import { atom, useAtom } from "jotai";
import { Course } from "openapi/api-client/src";

import { getCourses } from "@/utils/api/Course";

const versionAtom = atom(0);

const courseAtom = atom<Promise<Course[]> | []>(async (get) => {
  get(versionAtom);
  return getCourses();
});

export const useCourses = () => {
  const [courses] = useAtom(courseAtom);
  const [version, setVersion] = useAtom(versionAtom);
  const refetch = () => {
    setVersion(version + 1);
  };
  return {
    courses,
    refetch,
  };
};

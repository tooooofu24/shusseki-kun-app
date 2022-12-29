import { atom, useAtom } from "jotai";
import { CourseLog } from "openapi/api-client/src";

import { getCourseLogs } from "@/utils/api/CourseLog";

const versionAtom = atom(0);

const courseLogsAtom = atom<Promise<CourseLog[]> | []>(async (get) => {
  get(versionAtom);
  return getCourseLogs();
});

export const useCourseLogs = () => {
  const [courseLogs] = useAtom(courseLogsAtom);
  const [version, setVersion] = useAtom(versionAtom);
  const refetch = () => {
    setVersion(version + 1);
  };
  return {
    courseLogs,
    refetch,
  };
};

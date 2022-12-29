import { atom, useAtom } from "jotai";
import { Attendance } from "openapi/api-client/src";

import { getAttendances } from "@/utils/api/Attendance";

const versionAtom = atom(0);

const attendancesAtom = atom<Promise<Attendance[]> | []>(async (get) => {
  get(versionAtom);
  return getAttendances();
});

export const useAttendances = () => {
  const [attendances] = useAtom(attendancesAtom);
  const [version, setVersion] = useAtom(versionAtom);
  const refetch = () => {
    setVersion(version + 1);
  };
  return {
    attendances,
    refetch,
  };
};

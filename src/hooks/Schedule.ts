import { atom, useAtom } from "jotai";
import { Schedule } from "openapi/api-client/src";

import { getSchedules } from "@/utils/api/Schedule";

const versionAtom = atom(0);

const schedulesAtom = atom<Promise<Schedule[]> | []>(async (get) => {
  get(versionAtom);
  return getSchedules();
});

export const useSchedules = () => {
  const [schedules] = useAtom(schedulesAtom);
  const [version, setVersion] = useAtom(versionAtom);
  const refetch = () => {
    setVersion(version + 1);
  };
  return {
    schedules,
    refetch,
  };
};

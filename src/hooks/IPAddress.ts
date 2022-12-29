import { atom, useAtom } from "jotai";
import { IPAddress } from "openapi/api-client/src/models/IPAddress";

import { getIPAddresses } from "@/utils/api/IPAdress";

const versionAtom = atom(0);

const IPAddressesAtom = atom<Promise<IPAddress[]> | []>(async (get) => {
  get(versionAtom);
  return getIPAddresses();
});

export const useIPAddresses = () => {
  const [IPAddresses] = useAtom(IPAddressesAtom);
  const [version, setVersion] = useAtom(versionAtom);
  const refetch = () => {
    setVersion(version + 1);
  };
  return {
    IPAddresses,
    refetch,
  };
};

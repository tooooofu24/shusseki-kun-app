import { Card, CardBody } from "@chakra-ui/react";
import { WifiHigh } from "phosphor-react";

import { IPAddressListTable } from "@/components/model/IPAddress/IPAddressListTable";
import { PageTitle } from "@/components/ui/parts/PageTitle";
import { useIPAddresses } from "@/hooks/IPAddress";

export const SettingPage = () => {
  const { IPAddresses } = useIPAddresses();
  return (
    <>
      <PageTitle title="IPアドレス" icon={<WifiHigh />} />
      <Card>
        <CardBody>
          <IPAddressListTable IPAddresses={IPAddresses} />
        </CardBody>
      </Card>
    </>
  );
};

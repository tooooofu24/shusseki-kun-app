import { Card, CardBody } from "@chakra-ui/react";
import { WifiHigh } from "phosphor-react";

import { AddIPAddressButton } from "@/components/model/IPAddress/AddIPAddressButton";
import { IPAddressListTable } from "@/components/model/IPAddress/IPAddressListTable";
import { PageTitle } from "@/components/ui/parts/PageTitle";
import { useIPAddresses } from "@/hooks/IPAddress";

export const SettingPage = () => {
  const { IPAddresses } = useIPAddresses();
  return (
    <>
      <PageTitle
        title="IPアドレス"
        icon={<WifiHigh />}
        rightItem={<AddIPAddressButton />}
      />
      <Card>
        <CardBody>
          <IPAddressListTable IPAddresses={IPAddresses} />
        </CardBody>
      </Card>
    </>
  );
};

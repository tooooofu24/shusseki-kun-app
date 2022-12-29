import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CalendarCheck, Pencil } from "phosphor-react";

import { Auth } from "@/components/functional/authentication/Auth";
import { Layout } from "@/components/ui/layouts/Layout";
import { PageTitle } from "@/components/ui/parts/PageTitle";

export const HomePage = () => {
  return (
    <Layout type="sidebar">
      <Auth>
        <PageTitle
          title="時間割"
          icon={<CalendarCheck />}
          rightItem={<EditButton />}
        />
      </Auth>
    </Layout>
  );
};

const EditButton = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("/schedules/edit");
  };
  return (
    <Button leftIcon={<Pencil />} onClick={onClick}>
      編集
    </Button>
  );
};

import { Card, CardBody, Flex } from "@chakra-ui/react";

import { PageTitle } from "@/components/ui/parts/PageTitle";

export const ClassroomCreatePage = () => {
  return (
    <>
      <PageTitle title="クラス登録" goBackButton={true} />
      <Flex gap={10}>
        <Card>
          <CardBody></CardBody>
        </Card>
        <Card>
          <CardBody></CardBody>
        </Card>
      </Flex>
    </>
  );
};

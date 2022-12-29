import { Card, CardBody, Flex, Spinner } from "@chakra-ui/react";

import { colors } from "@/config/color/color";

import { PageTitle } from "../parts/PageTitle";

export const LoadingPage = () => {
  return (
    <>
      <PageTitle title="" icon={null} />
      <Card>
        <CardBody>
          <Flex height="10rem" alignItems="center" justifyContent="center">
            <Spinner color={colors.primary} />
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

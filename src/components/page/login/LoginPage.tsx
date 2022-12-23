import { Button, Card, CardBody, Flex } from "@chakra-ui/react";
import { GoogleLogo } from "phosphor-react";

import { Layout } from "@/components/ui/layouts/Layout";
import { Logo } from "@/components/ui/parts/Logo";

export const LoginPage = () => {
  return (
    <Layout type="fullPage">
      <Card maxW="85vw" width="350px">
        <CardBody>
          <Flex
            alignItems="center"
            justifyContent="center"
            px="16px"
            gap="15px"
            py="50px"
          >
            <Logo />
            
          </Flex>
          <Button leftIcon={<GoogleLogo />} width="100%">
            ログイン
          </Button>
        </CardBody>
      </Card>
    </Layout>
  );
};

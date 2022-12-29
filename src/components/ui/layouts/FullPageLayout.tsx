import { Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type props = {
  children?: ReactNode;
};
export const FullPageLayout: FC<props> = ({ children }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      position="fixed"
      display="grid"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  );
};

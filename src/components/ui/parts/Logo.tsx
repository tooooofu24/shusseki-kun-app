import { Flex, Img, Text } from "@chakra-ui/react";
import { FC } from "react";

type props = {
  image?: boolean;
  title?: boolean;
};
export const Logo: FC<props> = ({ image = true, title = true }) => {
  return (
    <Flex alignItems="center" gap="15px" width="fit-content">
      {image && <LogoImage />}
      {title && <LogoTitle />}
    </Flex>
  );
};

const LogoImage = () => {
  return <Img src="/svg/girl.svg" alt="ロゴ画像" width={30} height={30} />;
};

const LogoTitle = () => {
  return (
    <Text fontWeight="bold" color="teal.500" fontSize="20px">
      出席くん
    </Text>
  );
};

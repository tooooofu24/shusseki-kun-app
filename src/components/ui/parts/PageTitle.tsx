import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaretLeft } from "phosphor-react";
import { FC, memo, ReactNode } from "react";

import { colors } from "@/config/color/color";

type props = {
  title: string;
  icon?: ReactNode;
  goBackButton?: boolean;
  rightItem?: ReactNode;
};

export const PageTitle: FC<props> = memo(
  ({ title, icon, goBackButton = false, rightItem }) => {
    return (
      <Flex marginBottom="10px" alignItems="center" gap="15px" height="40px">
        <>
          {icon && <IconWrapper>{icon}</IconWrapper>}
          {goBackButton && <GoBackButton />}
          <Title>{title}</Title>
          <Flex ml="auto">{rightItem}</Flex>
        </>
      </Flex>
    );
  }
);

type TitleProps = {
  children?: ReactNode;
};
const Title: FC<TitleProps> = ({ children }) => {
  return (
    <Text fontWeight="bold" textColor={colors.primary} fontSize={20}>
      {children}
    </Text>
  );
};

const GoBackButton = () => {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <Box color={colors.primary}>
      <Link href="" onClick={onClick}>
        <CaretLeft size={25} />
      </Link>
    </Box>
  );
};

type IconWrapperProps = {
  children?: ReactNode;
};
const IconWrapper: FC<IconWrapperProps> = ({ children }) => {
  return (
    <Box
      __css={{
        svg: {
          height: "25px",
          width: "25px",
        },
      }}
      color={colors.primary}
    >
      {children}
    </Box>
  );
};

import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
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
          <IconWrapper>{icon}</IconWrapper>
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
    <IconButton
      onClick={onClick}
      color={colors.primary}
      aria-label="戻るボタン"
      variant="link"
      icon={<CaretLeft size={25} />}
    />
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

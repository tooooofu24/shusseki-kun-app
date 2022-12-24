import { Box, BoxProps, Flex, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  CalendarCheck,
  ChatsCircle,
  Gear,
  GraduationCap,
  SignOut,
  Users,
} from "phosphor-react";
import { FC, ReactNode } from "react";

import { Logo } from "../Logo";

export const NavigationContent = () => {
  const router = useRouter();
  const { isOpen, onOpen } = useDisclosure();

  return (
    <Flex flexDirection="column" h="full" py="20px">
      {/* ロゴ部分 */}
      <Box mb="20px">
        <Link href="/">
          <Flex alignItems="center" px="16px" gap="15px" height="75px">
            <Logo />
          </Flex>
        </Link>
      </Box>
      {/* ロゴ部分終了 */}
      <Link href="/">
        <Item
          icon={<CalendarCheck />}
          title="時間割"
          isActive={router.pathname == "/"}
        />
      </Link>
      <Link href="/classrooms">
        <Item
          icon={<GraduationCap />}
          title="クラス一覧"
          isActive={router.pathname == "/classrooms"}
        />
      </Link>
      <Link href="/users">
        <Item
          icon={<Users />}
          title="ユーザー一覧"
          isActive={router.pathname == "/users"}
        />
      </Link>
      <Link href="/settings">
        <Item
          icon={<Gear />}
          title="設定"
          isActive={router.pathname == "/settings"}
        />
      </Link>
      <Link href="/contact">
        <Item
          icon={<ChatsCircle />}
          title="お問合せ"
          isActive={router.pathname == "/contact"}
        />
      </Link>
      <Box mt="auto">
        <Item
          icon={<SignOut />}
          isActive={isOpen}
          title="ログアウト"
          onClick={onOpen}
        />
        {/* <LogoutModal onClose={onClose} isOpen={isOpen} /> */}
      </Box>
    </Flex>
  );
};

type props = {
  icon: ReactNode;
  title: string;
  isActive: boolean;
} & BoxProps;
const Item: FC<props> = ({ isActive, icon, title, ...props }) => {
  return (
    <Box
      width="full"
      p="16px"
      bg="white"
      textColor="teal.500"
      fontWeight="bold"
      cursor="pointer"
      _hover={{ bg: "teal.500", textColor: "white" }}
      {...(isActive && { bg: "teal.500", textColor: "white" })}
      {...props}
      __css={{
        svg: {
          height: "20px",
          width: "20px",
        },
      }}
    >
      <Flex alignItems="center" gap="15px">
        {icon}
        {title}
      </Flex>
    </Box>
  );
};

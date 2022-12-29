import {
  Avatar,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { User } from "openapi/api-client/src";
import { FC } from "react";

import { formatTimeStamp } from "@/utils/time";

import { DeleteUserButton } from "./DeleteUserButton";

type props = {
  users: User[];
};
export const UserListTable: FC<props> = ({ users }) => {
  return (
    <TableContainer>
      <Table size={["sm", "md"]}>
        <Thead>
          <Tr>
            <Th>アイコン</Th>
            <Th>ユーザー</Th>
            <Th>メールアドレス</Th>
            <Th>最終ログイン</Th>
            <Th>削除</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

type UserRowProps = {
  user: User;
};
const UserRow: FC<UserRowProps> = ({ user }) => {
  return (
    <Tr>
      <Td>
        <Avatar
          name={user.name}
          src={user.profileImage}
          size="sm"
          referrerPolicy="no-referrer"
        />
      </Td>
      <Td>{user.name}</Td>
      <Td>{user.email}</Td>
      <Td>{formatTimeStamp(user.lastAuthenticatedAt)}</Td>
      <Td>
        <DeleteUserButton user={user} />
      </Td>
    </Tr>
  );
};

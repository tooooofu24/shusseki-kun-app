import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC } from "react";

import { Invitation } from "@/types/Invitation";
import { formatTimeStamp } from "@/utils/time";

import { CancelInvitationButton } from "./CancelInvitationButton";
import { SendInvitationMailButton } from "./SendInvitationMailButton";

type props = {
  invitations: Invitation[];
};
export const InvitationListTable: FC<props> = ({ invitations }) => {
  return (
    <TableContainer>
      <Table size={["sm", "md"]}>
        <Thead>
          <Tr>
            <Th>再送信</Th>
            <Th>メールアドレス</Th>
            <Th>招待ユーザー</Th>
            <Th>招待日時</Th>
            <Th>キャンセル</Th>
          </Tr>
        </Thead>
        <Tbody>
          {invitations?.map((invitation) => (
            <InvitationRow key={invitation.id} invitation={invitation} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

type InvitationRowProps = {
  invitation: Invitation;
};
const InvitationRow: FC<InvitationRowProps> = ({ invitation }) => {
  return (
    <Tr>
      <Td>
        <SendInvitationMailButton invitation={invitation} />
      </Td>
      <Td>{invitation.email}</Td>
      <Td>{invitation.createdBy?.name}</Td>
      <Td>{formatTimeStamp(invitation?.createdAt)}</Td>
      <Td>
        <CancelInvitationButton invitation={invitation} />
      </Td>
    </Tr>
  );
};

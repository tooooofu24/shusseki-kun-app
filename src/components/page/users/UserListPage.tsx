import { Box, Card, CardBody } from "@chakra-ui/react";
import { UserPlus, Users } from "phosphor-react";

import { AddInvitationButton } from "@/components/model/Invitation/AddInvitationButton";
import { InvitationListTable } from "@/components/model/Invitation/InvitationListTable";
import { UserListTable } from "@/components/model/User/UserListTable";
import { SectionWrapper } from "@/components/ui/layouts/SectionWrapper";
import { PageTitle } from "@/components/ui/parts/PageTitle";
import { useInvitations } from "@/hooks/Invitation";
import { useUsers } from "@/hooks/User";

export const UserListPage = () => {
  const { users } = useUsers();
  const { invitations } = useInvitations();
  return (
    <SectionWrapper>
      <Box>
        <PageTitle
          title="ユーザー一覧"
          icon={<Users />}
          rightItem={<AddInvitationButton />}
        />
        <Card>
          <CardBody>
            <UserListTable users={users} />
          </CardBody>
        </Card>
      </Box>
      <Box>
        <PageTitle title="招待中" icon={<UserPlus />} />
        <Card>
          <CardBody>
            <InvitationListTable invitations={invitations} />
          </CardBody>
        </Card>
      </Box>
    </SectionWrapper>
  );
};

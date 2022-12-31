import { Card, CardBody } from "@chakra-ui/react";
import { GraduationCap } from "phosphor-react";

import { AddClassroomButton } from "@/components/model/Classroom/AddClassroomButton";
import { ClassroomListTable } from "@/components/model/Classroom/ClassroomListTable";
import { PageTitle } from "@/components/ui/parts/PageTitle";
import { useClassrooms } from "@/hooks/Classroom";

export const ClassroomListPage = () => {
  const { classrooms } = useClassrooms();
  return (
    <>
      <PageTitle
        title="クラス一覧"
        icon={<GraduationCap />}
        rightItem={<AddClassroomButton />}
      />
      <Card>
        <CardBody>
          <ClassroomListTable classrooms={classrooms} />
        </CardBody>
      </Card>
    </>
  );
};

import { Card, CardBody } from "@chakra-ui/react";
import { CalendarCheck } from "phosphor-react";

import { EditScheduleButton } from "@/components/model/Schedule/EditScheduleButton";
import { ScheduleTable } from "@/components/model/Schedule/ScheduleTable";
import { PageTitle } from "@/components/ui/parts/PageTitle";
import { useSchedules } from "@/hooks/Schedule";

export const EditSchedulePage = () => {
  const { schedules } = useSchedules();
  return (
    <>
      <PageTitle
        title="時間割"
        icon={<CalendarCheck />}
        rightItem={<EditScheduleButton />}
      />
      <Card>
        <CardBody>
          <ScheduleTable schedules={schedules} type="edit" />
        </CardBody>
      </Card>
    </>
  );
};

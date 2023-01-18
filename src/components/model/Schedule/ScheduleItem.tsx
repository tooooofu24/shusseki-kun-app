import { AspectRatio, Box, Tooltip } from "@chakra-ui/react";
import { format, previousDay } from "date-fns";
import Router from "next/router";
import { Schedule } from "openapi/api-client/src";
import { FC } from "react";

import { ScheduleItemContent } from "./ScheduleItemContent";

type props = {
  schedule?: Schedule;
};
export const ScheduleItem: FC<props> = ({ schedule }) => {
  if (!schedule) {
    return <Empty />;
  }
  return (
    <Tooltip label="出欠を登録する" placement="top" hasArrow>
      <Box p={2}>
        <AspectRatio
          ratio={1}
          cursor="pointer"
          _hover={{ bg: "gray.50" }}
          rounded="lg"
          color="teal.500"
          onClick={() =>
            Router.push(
              `/attendances/create?courseId=${schedule.course.id}&period=${
                schedule.period
              }&date=${calculateDate(schedule)}`
            )
          }
        >
          <ScheduleItemContent schedule={schedule} />
        </AspectRatio>
      </Box>
    </Tooltip>
  );
};

const calculateDate = (schedule: Schedule) => {
  const date = previousDay(new Date(), schedule.day);
  return format(date, "yyyy-MM-dd");
};

const Empty = () => {
  return (
    <AspectRatio ratio={1}>
      <></>
    </AspectRatio>
  );
};

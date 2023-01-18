import { AspectRatio, Box } from "@chakra-ui/react";
import { Schedule } from "openapi/api-client/src";
import { FC } from "react";

import { Day } from "../../../types/Day";
import { Period } from "../../../types/Period";
import { AddScheduleButton } from "./AddScheduleButton";
import { DeleteScheduleButton } from "./DeleteScheduleButton";
import { ScheduleItemContent } from "./ScheduleItemContent";

type props = {
  schedule?: Schedule;
  period: Period;
  day: Day;
};
export const EditScheduleItem: FC<props> = ({ schedule, period, day }) => {
  if (!schedule) {
    return <Empty period={period} day={day} />;
  }
  return (
    <Box p={2}>
      (
      <Box position="relative">
        <AspectRatio ratio={1} color="gray.400">
          <ScheduleItemContent schedule={schedule} />
        </AspectRatio>
        <Box position="absolute" top="5%" right="5%">
          <DeleteScheduleButton schedule={schedule} />
        </Box>
      </Box>
      )
    </Box>
  );
};

type EmptyProps = {
  period: Period;
  day: Day;
};
const Empty: FC<EmptyProps> = ({ period, day }) => {
  return (
    <AspectRatio ratio={1}>
      <Box>
        <AddScheduleButton period={period} day={day} />
      </Box>
    </AspectRatio>
  );
};

import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Schedule } from "openapi/api-client/src";
import { FC } from "react";

import { SubjectIcon } from "./SubjectIcon";

type props = {
  schedule: Schedule;
};
export const ScheduleItemContent: FC<props> = ({ schedule }) => {
  const [isSmallest, isSmall] = useMediaQuery([
    "(max-width: 550px)",
    "(max-width: 700px)",
  ]);

  return (
    <Flex height="full" position="relative">
      <Flex flexDirection="column" alignItems="center">
        {isSmallest ? (
          <Text fontWeight="bold" fontSize="xl">
            {schedule.course.subject.name.slice(0, 1)}
          </Text>
        ) : isSmall ? (
          <>
            <Text fontSize="xs">{schedule.course.subject.name}</Text>
            <Text fontSize="sm" fontWeight="bold">
              {schedule.course.classroom.grade}年
              {schedule.course.classroom.name}組
            </Text>
          </>
        ) : (
          <>
            <SubjectIcon
              subjectName={schedule.course.subject.name}
              size="50%"
            />
            <Text fontSize={["xs", "sm"]}>{schedule.course.subject.name}</Text>
            <Text fontSize={["sm", "md", "lg"]} fontWeight="bold">
              {schedule.course.classroom.grade}年
              {schedule.course.classroom.name}組
            </Text>
          </>
        )}
      </Flex>
    </Flex>
  );
};

import {
  PostCourseLogsRequest,
  PostCourseLogsRequestAttendancesInner,
} from "openapi/api-client/src";
import { z } from "zod";

import { schemaFromType } from "./utils";

const attendanceScheme =
  schemaFromType<PostCourseLogsRequestAttendancesInner>()(
    z.object({
      studentId: z.coerce.number(),
      attend: z.coerce.boolean(),
      knowledge: z.coerce.number(),
      expression: z.coerce.number(),
      attitude: z.coerce.number(),
      comment: z.coerce.string(),
    })
  );

export const postCourseLogScheme = schemaFromType<PostCourseLogsRequest>()(
  z.object({
    courseId: z.coerce.number(),
    date: z.coerce.string(),
    period: z.coerce.number(),
    attendances: z.array(attendanceScheme),
  })
);

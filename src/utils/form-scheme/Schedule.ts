import { PostScheduleRequest } from "openapi/api-client/src";
import { z } from "zod";

import { formError } from "@/config/error/formError";

import { DayScheme } from "./Day";
import { PeriodScheme } from "./Period";
import { schemaFromType } from "./utils";

export const addScheduleScheme = schemaFromType<PostScheduleRequest>()(
  z.object({
    classroomId: z.coerce
      .string()
      .min(1, { message: formError.REQUIRED })
      .transform((v) => parseInt(v)),
    subjectId: z.coerce.number().min(1, { message: formError.REQUIRED }),
    day: DayScheme,
    period: PeriodScheme,
  })
);

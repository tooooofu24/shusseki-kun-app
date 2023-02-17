import { z } from "zod";

export const PeriodScheme = z.coerce.number().min(1).max(7);

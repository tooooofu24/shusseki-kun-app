import { z } from "zod";

export const PeriodScheme = z.number().min(1).max(7);

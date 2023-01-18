import { z } from "zod";

export const DayScheme = z.enum(["月", "火", "水", "木", "金"]);

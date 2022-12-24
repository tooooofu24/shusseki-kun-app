import { Course } from "./Course";

export type Schedule = {
  id: number;
  course: Course;
  day: number;
  dayJa: string;
  period: number;
};

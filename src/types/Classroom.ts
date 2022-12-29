import { Course } from "./Course";

export type Classroom = {
	id: number;
	grade: number;
	name: string;
	teacher: string;
	lastLessonDate: string | null;
	studentsCount: number;
	courses?: Course[];
};

import { Classroom } from "./Classroom";
import { Score } from "./Score";
import { Subject } from "./Subject";

export type Course = {
	id: number;
	classroom: Classroom;
	subject: Subject;
	scores?: Score[];
};

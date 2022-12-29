import { atom, useAtom } from "jotai";
import { ClassroomWithCourse } from "openapi/api-client/src";

import { getClassrooms } from "@/utils/api/Classroom";

const versionAtom = atom(0);

const classroomsAtom = atom<Promise<ClassroomWithCourse[]> | []>(
	async (get) => {
		get(versionAtom);
		return getClassrooms();
	}
);

export const useClassrooms = () => {
	const [classrooms] = useAtom(classroomsAtom);
	const [version, setVersion] = useAtom(versionAtom);
	const refetch = () => {
		setVersion(version + 1);
	};
	return {
		classrooms,
		refetch,
	};
};

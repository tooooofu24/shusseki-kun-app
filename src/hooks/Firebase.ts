import { User } from "firebase/auth";
import { atom, SetStateAction, useAtom } from "jotai";

const firebaseUserAtom = atom<User | null>(null);

export const useFirebaseUser = (): [
	user: User | null,
	set: (update: SetStateAction<User | null>) => void
] => {
	const [user, set] = useAtom(firebaseUserAtom);
	return [user, set];
};

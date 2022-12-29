import { User } from "./User";

export type Invitation = {
	id: number;
	email: string;
	createdBy?: User;
	createdAt: string;
};

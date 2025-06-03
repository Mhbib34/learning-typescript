export enum Role {
	ADMIN = "ADMIN",
	USER = "USER",
	AUTHOR = "AUTHOR",
}

export type Client = {
	id: number;
	name: string;
	age: number;
	role: Role;
};

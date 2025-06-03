import { Client, Role } from "../src/enum";

describe("enum", () => {
	it("should be enum", () => {
		const client: Client = {
			id: 1,
			name: "Muhammad",
			age: 20,
			role: Role.ADMIN,
		};

		console.log(client);
	});
});

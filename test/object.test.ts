import { Employee, Manager } from "../src/interface";

describe("object", () => {
	it("should be object", () => {
		const person: { name: string; age: number } = {
			name: "Muhammad",
			age: 20,
		};

		expect(person).toEqual({
			name: "Muhammad",
			age: 20,
		});
	});

	it("should be extends interface", () => {
		const employee: Employee = {
			id: 1,
			name: "Muhammad",
			age: 20,
		};

		const manager: Manager = {
			id: 1,
			name: "Habib",
			age: 20,
			role: "Manager",
		};

		console.log(employee);
		console.log(manager);
	});
});

import { Employee, Manager, Seller } from "../src/interface";

describe("interface", () => {
	it("should be interface", () => {
		const seller: Seller = {
			id: 1,
			name: "Muhammad",
		};

		console.log(seller);
	});

	it("should be interface function", () => {
		interface AddFunction {
			(a: number, b: number): number;
		}

		const add: AddFunction = (a: number, b: number): number => a + b;

		expect(add(1, 2)).toBe(3);
	});

	it("indexable interface", () => {
		interface StringArray {
			[index: number]: string;
		}

		const names: StringArray = ["Muhammad", "Habib"];
		expect(names[0]).toBe("Muhammad");
		expect(names[1]).toBe("Habib");
	});

	it("indexable interface non number", () => {
		interface StringDictionary {
			[key: string]: string;
		}

		const names: StringDictionary = {
			name: "Muhammad",
			address: "belawan",
		};
		expect(names["name"]).toBe("Muhammad");
		expect(names["address"]).toBe("belawan");
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

	it("should be function interface", () => {
		interface Person {
			name: string;
			sayHello(name: string): string;
		}

		const person: Person = {
			name: "Muhammad",
			sayHello(name: string): string {
				return `Hello ${name} my name is ${this.name}`;
			},
		};

		console.log(person.sayHello("Habib"));
	});
});

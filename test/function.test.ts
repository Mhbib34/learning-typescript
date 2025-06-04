describe("function", () => {
	it("should be function", () => {
		const sayHello = (name: string): string => {
			return `Hello ${name}`;
		};
		expect(sayHello("Muhammad")).toBe("Hello Muhammad");

		const printHello = (name: string): void => {
			console.log(`Hello ${name}`);
		};
		expect(printHello("Muhammad")).toBeUndefined();
	});

	it("should support default value", () => {
		const sayHello = (name: string, age: number = 20): string => {
			return `Hello ${name} you are ${age} years old`;
		};
		expect(sayHello("Muhammad")).toBe(
			"Hello Muhammad you are 20 years old"
		);
	});

	it("should support rest parameter", () => {
		const sum = (...numbers: number[]): number => {
			return numbers.reduce((prev, curr) => prev + curr, 0);
		};
		expect(sum(1, 2, 3, 4, 5)).toBe(15);
	});

	it("should support optional parameter", () => {
		const sayHello = (name: string, age?: number): string => {
			return `Hello ${name} you are ${age} years old`;
		};
		expect(sayHello("Muhammad")).toBe(
			"Hello Muhammad you are undefined years old"
		);
	});
	it("should support function overloading", () => {
		function callMe(message: string): number;
		function callMe(message: number): string;
		function callMe(message: any): any {
			if (typeof message === "string") {
				return message;
			} else if (typeof message === "number") {
				return message;
			}
		}

		expect(callMe("Muhammad")).toBe("Muhammad");
		expect(callMe(20)).toBe(20);
	});
});

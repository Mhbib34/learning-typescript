describe("union", () => {
	it("should be union", () => {
		const name: string | number = "Muhammad";
		const age: string | number = 20;

		expect(name).toBe("Muhammad");
		expect(age).toBe(20);
	});

	it("should be union type", () => {
		function process(values: string | number | boolean) {
			if (typeof values === "string") {
				return values.toUpperCase();
			} else if (typeof values === "number") {
				return values + 2;
			} else if (typeof values === "boolean") {
				return !values;
			} else {
				console.log(values);
			}
		}

		expect(process("Muhammad")).toBe("MUHAMMAD");
		expect(process(20)).toBe(22);
		expect(process(true)).toBe(false);
	});
});

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
});

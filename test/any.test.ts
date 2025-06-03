describe("any", () => {
	it("should be any", () => {
		const person: any = {
			name: "Muhammad",
			age: 20,
		};

		console.log(person.name);

		expect(person).toEqual({
			name: "Muhammad",
			age: 20,
		});
	});
});

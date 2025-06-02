describe("tipe data array", () => {
	it("should be array", () => {
		const names: string[] = ["Muhammad", "Habib"];
		const numbers: number[] = [1, 2, 3];

		console.log(names, numbers);

		expect(names).toEqual(["Muhammad", "Habib"]);
		expect(numbers).toEqual([1, 2, 3]);
	});

	it("should read only array", () => {
		const hobbies: ReadonlyArray<string> = ["Coding", "Reading"];

		// hobbies.push("Coding");
		expect(hobbies).toEqual(["Coding", "Reading"]);
	});

	it("should be tuple", () => {
		const person: readonly [string, number] = ["Muhammad", 20];
		expect(person).toEqual(["Muhammad", 20]);
	});
});

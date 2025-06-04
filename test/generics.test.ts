describe("Generics", () => {
	it("should be generics", () => {
		function identity<T>(arg: T): T {
			return arg;
		}

		const output = identity<string>("Muhammad");
		const output2 = identity(20);
		expect(output).toBe("Muhammad");
		expect(output2).toBe(20);
	});
	it("should be generics in interface", () => {
		interface GenericIdentityFn<T, U, J> {
			first: T;
			second: U;
			third: J;
		}

		interface IdentityFn<T> {
			arg: T;
			value: GenericIdentityFn<T, number, boolean>;
		}

		type Person<T, U> = {
			name: T;
			age: U;
		};

		const identity: Person<string, number> = {
			name: "Muhammad",
			age: 20,
		};

		const myIdentity: IdentityFn<boolean> = {
			arg: false,
			value: {
				first: false,
				second: 20,
				third: true,
			},
		};

		expect(identity).toEqual({
			name: "Muhammad",
			age: 20,
		});
		expect(myIdentity).toEqual({
			arg: false,
			value: {
				first: false,
				second: 20,
				third: true,
			},
		});
	});

	it("should be generics constraint", () => {
		const longLength = <T extends { length: number }>(item: T): void => {
			console.log(item.length);
		};

		longLength([1, 2, 3]);
		longLength("Muhammadhabibgantengsekali");
	});
});

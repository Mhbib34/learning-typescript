import { Category, Product } from "../src/alias";

describe("alias", () => {
	it("should be alias", () => {
		const category: Category = {
			id: 1,
			name: "Elektronik",
		};

		const product: Product = {
			id: "1",
			name: "Laptop",
			price: 1000000,
			category: category,
		};

		expect(product).toEqual({
			id: "1",
			name: "Laptop",
			price: 1000000,
			category: {
				id: 1,
				name: "Elektronik",
			},
		});

		console.log(product);
	});
});

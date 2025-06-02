describe("Tipe data", () => {
  it("must be declare", () => {
    let name: string = "Muhammad Habib";
    let age: number = 20;
    let isMarried: boolean = true;

    expect(name).toBe("Muhammad Habib");
    expect(age).toBe(20);
    expect(isMarried).toBe(true);
  });
});

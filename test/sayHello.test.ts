import { sayHello } from "../src/sayHello";

describe("sayHello", () => {
  it("should say hello", () => {
    expect(sayHello("world", 20)).toBe("Hello world you are 20 years old");
  });
});

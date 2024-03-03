import { describe, expect, it } from "vitest";
import { sayHello } from "../src/funtions/FunctionTest";

describe("Say Hello", () => {
  it("should say hello", () => {
    const result = sayHello("Jon Heri");
    expect(result).toBe("Hello Jon Heri");
  });
});

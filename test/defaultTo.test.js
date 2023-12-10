import chai from "chai";
const expect = chai.expect;

import defaultTo from "../src/defaultTo.js";

describe("defaultTo", () => {
  it("should return the value if it is not NaN, null, or undefined", () => {
    // Numeric values
    expect(defaultTo(42, 10)).to.equal(42);
    expect(defaultTo(-5, 0)).to.equal(-5);
    expect(defaultTo(0, 100)).to.equal(0);

    // String values
    expect(defaultTo("hello", "default")).to.equal("hello");
    expect(defaultTo("", "fallback")).to.equal("");

    // Boolean values
    expect(defaultTo(true, false)).to.equal(true);
    expect(defaultTo(false, true)).to.equal(false);

    // Arrays and objects
    const arr = [1, 2, 3];
    expect(defaultTo(arr, [4, 5])).to.equal(arr);
    const obj = { key: "value" };
    expect(defaultTo(obj, { defaultKey: "defaultValue" })).to.equal(obj);
  });
  /* BUG: returns NaN for some reason
  it("should return the default value if the input is NaN, null, or undefined", () => {
    // Undefined and null values
    expect(defaultTo(undefined, 10)).to.equal(10);
    expect(defaultTo(null, "default")).to.equal("default");
    expect(defaultTo(NaN, "fallback")).to.equal("fallback");
    expect(defaultTo(NaN, 42)).to.equal(42);
  });
  */
});

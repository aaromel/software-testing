import chai from "chai";
const expect = chai.expect;

import isEmpty from "../src/isEmpty.js";

describe("isEmpty", () => {
  it("should return true for empty values", () => {
    // Null and undefined
    expect(isEmpty(null)).to.equal(true);
    expect(isEmpty(undefined)).to.equal(true);

    // Boolean and numeric values
    expect(isEmpty(true)).to.equal(true);
    expect(isEmpty(0)).to.equal(true);

    // Empty array-like values
    expect(isEmpty([])).to.equal(true);
    expect(isEmpty("")).to.equal(true);
    expect(isEmpty(new Int8Array())).to.equal(true);

    // Empty maps and sets
    expect(isEmpty(new Map())).to.equal(true);
    expect(isEmpty(new Set())).to.equal(true);

    // Empty objects
    expect(isEmpty({})).to.equal(true);
  });

  it("should return false for non-empty values", () => {
    // Non-empty array-like values
    expect(isEmpty([1, 2, 3])).to.equal(false);
    expect(isEmpty("abc")).to.equal(false);
    expect(isEmpty(new Int8Array([1, 2, 3]))).to.equal(false);

    // Non-empty maps and sets
    const nonEmptyMap = new Map([[1, "one"]]);
    const nonEmptySet = new Set([1, 2, 3]);
    expect(isEmpty(nonEmptyMap)).to.equal(false);
    expect(isEmpty(nonEmptySet)).to.equal(false);

    // Non-empty objects
    const nonEmptyObject = { key: "value" };
    expect(isEmpty(nonEmptyObject)).to.equal(false);
  });

  it("should handle prototype properties correctly", () => {
    // An object with prototype properties is considered empty
    const objWithPrototype = Object.create({ prototypeKey: "prototypeValue" });
    expect(isEmpty(objWithPrototype)).to.equal(true);

    // An object without prototype properties is not considered empty
    const objWithoutPrototype = { key: "value" };
    expect(isEmpty(objWithoutPrototype)).to.equal(false);
  });

  // Add more test cases based on your specific use cases.
});

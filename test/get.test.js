import chai from "chai";
const expect = chai.expect;

import get from "../src/get.js";

describe("get", () => {
  it("should get the value at the specified path", () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, "a[0].b.c");
    expect(result).to.equal(3);
  });

  it("should get the value using an array path", () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, ["a", "0", "b", "c"]);
    expect(result).to.equal(3);
  });

  it("should return the default value for undefined resolved values", () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, "a.b.c", "default");
    expect(result).to.equal("default");
  });

  it("should return the default value for undefined object", () => {
    const result = get(null, "a.b.c", "default");
    expect(result).to.equal("default");
  });

  it("should return the default value for undefined path", () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, undefined, "default");
    expect(result).to.equal("default");
  });

  it("should return the default value for undefined object and path", () => {
    const result = get(null, undefined, "default");
    expect(result).to.equal("default");
  });

  it("should return undefined for non-existing paths", () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, "x.y.z");
    expect(result).to.be.undefined;
  });

  it("should return the default value for non-existing paths with default specified", () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, "x.y.z", "default");
    expect(result).to.equal("default");
  });

  it("should return undefined for non-existing paths with undefined default value", () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, "x.y.z", undefined);
    expect(result).to.be.undefined;
  });

  it("should handle getting value from nested arrays", () => {
    const object = { a: [[{ b: { c: 3 } }]] };
    const result = get(object, "a[0][0].b.c");
    expect(result).to.equal(3);
  });

  it("should handle getting value from arrays with negative indices", () => {
    const object = { a: [{ b: { c: 3 } }, { b: { c: 4 } }] };
    const result = get(object, "a[-1].b.c");
    expect(result).to.be.undefined;
  });

  it("should handle getting value from arrays with out-of-bounds indices", () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, "a[1].b.c");
    expect(result).to.be.undefined;
  });
});

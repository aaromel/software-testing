import chai from "chai";
const expect = chai.expect;

import endsWith from "../src/endsWith.js";

describe("endsWith", () => {
  it("should return true if string ends with the target string", () => {
    const result = endsWith("abc", "c");
    expect(result).to.be.true;
  });

  it("should return false if string does not end with the target string", () => {
    const result = endsWith("abc", "b");
    expect(result).to.be.false;
  });

  it("should return true when specifying a position within the string", () => {
    const result = endsWith("abc", "b", 2);
    expect(result).to.be.true;
  });

  it("should return false when specifying a position outside the string", () => {
    const result = endsWith("abc", "b", 1);
    expect(result).to.be.false;
  });

  it("should return true when target is an empty string", () => {
    const result = endsWith("abc", "");
    expect(result).to.be.true;
  });

  it("should handle position as a negative number", () => {
    const result = endsWith("abc", "a", -1);
    expect(result).to.be.false;
  });

  it("should handle other than string parameters", () => {
    const result = endsWith(234, 4);
    expect(result).to.be.false;
  });
  /* BUG
  it("should handle parameterless call", () => {
    const result = endsWith();
    expect(result).to.be.false;
  });
  */
});

import chai from "chai";
const expect = chai.expect;

import capitalize from "../src/capitalize.js";

describe("capitalize", () => {
  it("should capitalize the first character", () => {
    const result = capitalize("test");
    expect(result).to.equal("Test");
  });

  it("should handle empty string", () => {
    const result = capitalize("");
    expect(result).to.equal("");
  });

  it("should handle null or undefined input", () => {
    const resultNull = capitalize(null);
    const resultUndefined = capitalize(undefined);

    expect(resultNull).to.equal("Null");
    expect(resultUndefined).to.equal("Undefined");
  });

  it("should handle already capitalized string", () => {
    const result = capitalize("Test");
    expect(result).to.equal("Test");
  });

  it("should handle string with symbols", () => {
    const result = capitalize("tést");
    expect(result).to.equal("Tést");
  });

  it("should handle non-alphabetic characters in the middle", () => {
    const result = capitalize("test-ing");
    expect(result).to.equal("Test-ing");
  });
});

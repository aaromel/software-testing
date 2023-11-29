import chai from "chai";
const expect = chai.expect;

import slice from "../src/slice.js";

describe("slice", () => {
  it("should return a slice of array from start to end", () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, 1, 4);

    expect(result).to.deep.equal([2, 3, 4]);
  });

  it("should handle negative start and end indices", () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, -3, -1);

    expect(result).to.deep.equal([3, 4]);
  });

  it("should return an empty array if start is greater than or equal to end", () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, 3, 1);

    expect(result).to.deep.equal([]);
  });

  it("should handle negative start index that exceeds array length", () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, -10, 3);

    expect(result).to.deep.equal([1, 2, 3]);
  });

  it("should handle undefined end index as array length", () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, 2);

    expect(result).to.deep.equal([3, 4, 5]);
  });

  it("should handle undefined start index as 0", () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, undefined, 3);

    expect(result).to.deep.equal([1, 2, 3]);
  });

  it("should return an empty array for empty input array", () => {
    const array = [];
    const result = slice(array, 1, 3);

    expect(result).to.deep.equal([]);
  });

  it("should handle null input array", () => {
    const result = slice(null, 1, 3);

    expect(result).to.deep.equal([]);
  });

  it("should handle null parameters", () => {
    const result = slice(null, null, null);

    expect(result).to.deep.equal([]);
  });

  it("should handle null parameters with integer array", () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, null, null);

    expect(result).to.deep.equal([]);
  });

  it("should handle other than integer type of parameters", () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, "abc", "a");

    expect(result).to.deep.equal([]);
  });
});

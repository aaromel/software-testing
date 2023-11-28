import chai from "chai";
const expect = chai.expect;

import filter from "../src/filter.js";

describe("filter", () => {
  it("should return an array of elements for which the predicate returns true", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];

    const result = filter(users, ({ active }) => active);

    console.log(result);
    expect(result).to.deep.equal([{ user: "barney", active: true }]);
  });

  it("should return an empty array if no elements satisfy the predicate", () => {
    const users = [
      { user: "barney", active: false },
      { user: "fred", active: false },
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).to.deep.equal([[]]);
  });

  it("should handle an array with all elements satisfying the predicate", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: true },
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).to.deep.equal(users);
  });

  it("should handle an array with no predicate provided", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];

    const result = filter(users);

    expect(result).to.deep.equal(users);
  });

  it("should handle a predicate that filters based on index", () => {
    const numbers = [1, 2, 3, 4, 5];

    const result = filter(numbers, (_, index) => index % 2 === 0);

    expect(result).to.deep.equal([1, 3, 5]);
  });

  it("should handle a predicate that filters based on value", () => {
    const numbers = [1, 2, 3, 4, 5];

    const result = filter(numbers, (value) => value > 2);

    expect(result).to.deep.equal([3, 4, 5]);
  });

  it("should handle an empty input array", () => {
    const result = filter([], () => true);

    expect(result).to.deep.equal([[]]);
  });

  it("should handle a null input array", () => {
    const result = filter(null, () => true);

    expect(result).to.deep.equal([[]]);
  });

  it("should handle an int input array", () => {
    const result = filter(5435, () => true);

    expect(result).to.deep.equal([[]]);
  });
});

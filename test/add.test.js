import chai from "chai";
const expect = chai.expect;

import add from "../src/add.js";

describe("add", () => {
  it("should add 1 and 2 to equal 3", () => {
    expect(add(1, 2)).to.equal(3);
  });

  it("should add -1 and 1 to equal 0", () => {
    expect(add(-1, 1)).to.equal(0);
  });

  it("should add 0 and 0 to equal 0", () => {
    expect(add(0, 0)).to.equal(0);
  });

  it("should add a and b to equal ab", () => {
    expect(add("a", "b")).to.equal("ab");
  });

  it("should add null and null to equal 0", () => {
    expect(add(null, null)).to.equal(0);
  });
});

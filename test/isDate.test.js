import chai from "chai";
const expect = chai.expect;

import isDate from "../src/isDate.js";

describe("isDate", () => {
  it("should return true for a Date object", () => {
    const result = isDate(new Date());
    expect(result).to.be.true;
  });

  it("should return false for a string representing a date", () => {
    const result = isDate("Mon April 23 2012");
    expect(result).to.be.false;
  });

  it("should return false for an object that is not a Date", () => {
    const result = isDate({ key: "value" });
    expect(result).to.be.false;
  });

  it("should return false for null", () => {
    const result = isDate(null);
    expect(result).to.be.false;
  });

  it("should return false for undefined", () => {
    const result = isDate(undefined);
    expect(result).to.be.false;
  });
});

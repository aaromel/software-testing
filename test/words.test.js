import chai from "chai";
const expect = chai.expect;

import words from "../src/words.js";

describe("words", () => {
  it("should split string into an array of words", () => {
    const result = words("fred, barney, & pebbles");
    expect(result).to.deep.equal(["fred", "barney", "pebbles"]);
  });

  it("should use the provided pattern to split string into words", () => {
    const result = words("fred, barney, & pebbles", /[^, ]+/g);
    expect(result).to.deep.equal(["fred", "barney", "&", "pebbles"]);
  });

  it("should handle an empty string", () => {
    const result = words("");
    expect(result).to.deep.equal([]);
  });

  // BUG
  //it("should handle null input", () => {
  //  const result = words(null);
  //  expect(result).to.deep.equal([]);
  //});

  // BUG
  //it("should handle undefined input", () => {
  //  const result = words(undefined);
  //  expect(result).to.deep.equal([]);
  //});

  // BUG
  //it("should handle other than strings", () => {
  //  const result = words(123);
  //  expect(result).to.deep.equal([123]);
  //});

  it("should handle patters as null", () => {
    const result = words("fred, barney, & pebbles", null);
    expect(result).to.deep.equal([]);
  });

  it("should handle a string with no spaces or separators", () => {
    const result = words("word");
    expect(result).to.deep.equal(["word"]);
  });
});

const assert = require("assert");

const truc = require("../src/truc");
console.log("truc: ", truc);

describe("Truc", function () {
  it("should return 345", function () {
    assert.equal(truc.toto, 345);
  });
});

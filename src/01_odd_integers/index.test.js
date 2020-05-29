const subject = require(".");

describe("Odd integers", () => {
  it("should return odd numbers from integer empty", () => {
    expect(subject.oddIntegers([])).toEqual([]);
  });

  it("should return odd numbers from integer empty case 1", () => {
    expect(subject.oddIntegers([2, 4, 6])).toEqual([]);
  });

  it("should return odd numbers from integer empty case 2", () => {
    expect(subject.oddIntegers([1, 5, 3])).toEqual([1, 5, 3]);
  });

  it("should return odd numbers from integer", () => {
    expect(subject.oddIntegers([1, 3, 5, 6, 8, 2, 0, 11])).toEqual([
      1,
      3,
      5,
      11
    ]);
  });
});

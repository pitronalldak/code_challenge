const subject = require(".");

describe("Overlapping spreads", () => {
  it("should return sum of overlapping spreads empty array", () => {
    expect(subject.overlappingSpreads([])).toEqual(0);
  });

  it("should return sum of overlapping spreads empty array", () => {
    expect(subject.overlappingSpreads([1, 2, 3])).toEqual(2);
  });

  it("should return sum of overlapping spreads empty array", () => {
    expect(subject.overlappingSpreads([-1, -2, -3])).toEqual(-2);
  });

  it("should return sum of overlapping spreads", () => {
    expect(subject.overlappingSpreads([-3, 5, 8, -1, 6, 11])).toEqual(5);
  });
});

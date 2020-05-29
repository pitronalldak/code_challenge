const subject = require(".");

describe("Percentile", () => {
  it("should return 90 percentile for the array of integers empty", () => {
    expect(subject.percentile(90, [])).toEqual([]);
  });

  it("should return 90 percentile for the array of integers case 1", () => {
    expect(subject.percentile(20, [1, 2])).toEqual([1, 2]);
  });

  it("should return 90 percentile for the array of integers", () => {
    expect(subject.percentile(90, [1, 3, 7, 5, 9, 5, 2])).toEqual([9]);
  });
});

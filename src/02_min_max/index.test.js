const subject = require(".");

describe("Min & max", () => {
  it("should return min and max values of the array empty", () => {
    expect(subject.minMax([])).toEqual({
      min: undefined,
      max: undefined
    });
  });

  it("should return min and max values of the array empty case 1", () => {
    expect(subject.minMax([1, 2])).toEqual({
      min: 1,
      max: 2
    });
  });

  it("should return min and max values of the array empty case 2", () => {
    expect(subject.minMax([2, -4])).toEqual({
      min: -4,
      max: 2
    });
  });

  it("should return min and max values of the array", () => {
    expect(subject.minMax([10, 4, 5, 7, 99, 1])).toEqual({
      min: 1,
      max: 99
    });
  });
});

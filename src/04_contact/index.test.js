const subject = require(".");

describe("translate", () => {
  it("should return number in alien format empty", () => {
    expect(subject.translate(0)).toEqual("A");
  });

  it("should return number in alien format case 1", () => {
    expect(subject.translate(1)).toEqual("B");
  });

  it("should return number in alien format case 2", () => {
    expect(subject.translate(3)).toEqual("BA");
  });

  it("should return number in alien format", () => {
    expect(subject.translate(22)).toEqual("CBB");
  });
});

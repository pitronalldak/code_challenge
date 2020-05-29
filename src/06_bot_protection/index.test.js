const subject = require(".");

describe("Bot protection", () => {
  it("should detect bot from logged actions empty case", () => {
    const actions = [];
    expect(subject.botProtection(actions)).toEqual(false);
  });

  it("should detect bot from logged actions case 1 ", () => {
    const actions = ["1", "2", "3", "1", "2", "3"];
    expect(subject.botProtection(actions)).toEqual(true);
  });

  it("should detect bot from logged actions case 2", () => {
    const actions = ["1", "2", "13", "3", "1", "2", "3"];
    expect(subject.botProtection(actions)).toEqual(false);
  });

  it("should detect bot from logged actions", () => {
    const actions = [
      "left",
      "right",
      "fire",
      "jump",
      "fire",
      "back",
      "forward",
      "forward",
      "jump",
      "fire",
      "back",
      "left",
      "left",
      "right"
    ];
    expect(subject.botProtection(actions)).toEqual(true);
  });
});

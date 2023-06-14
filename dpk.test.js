const { deterministicPartitionKey, createHash } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the value when partition key is passed in event", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 1 });
    expect(trivialKey).toBe("1");
  });

  it("Returns the hex string when empty event is passed", () => {
    const trivialKey = deterministicPartitionKey({});
    const data = JSON.stringify({});
    expect(trivialKey).toBe(createHash(data));
  });

  it("Modifies the result when partition key is passed with length > 256", () => {
    const partitionKey = '1'.repeat(257);
    const trivialKey = deterministicPartitionKey({ partitionKey });
    expect(trivialKey).toBe(createHash(partitionKey));
  });

});

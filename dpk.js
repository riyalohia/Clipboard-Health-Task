const crypto = require("crypto");

const createHash = (data) => crypto.createHash("sha3-512").update(data).digest("hex");

// Refactored Code
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    const data = JSON.stringify(event);
    candidate = event.partitionKey || createHash(data);
  }

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash(candidate);
  }

  return candidate;
};

exports.createHash = createHash;

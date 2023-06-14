# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
Here's an explanation of the refactoring made:

1. Removed unnecessary nested if statements: Instead of using nested if statements to check the value of `event.partitionKey`, OR (`||`) operator can be used.

2. Created a createHash util: We need to use `crypto.createHash("sha3-512").update(data).digest("hex")` at multiple places, i.e not only in our function file but also in our test file. So, I have created a single util function. If in future, we want to change the hash used, we just need to make the changes at single place.

3. Initialized candidate: Initialized candidate with `TRIVIAL_PARTITION_KEY` to remove unnecessary if else statements.

By applying these optimizations, the code is simplified and readable.
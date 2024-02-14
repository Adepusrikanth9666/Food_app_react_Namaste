import { sum } from "../sum";

test("Sum function Shoould calculate teh sum of two Numbers", () => {
  const result = sum(3, 4);

  //   Assertion(Expectation)
  expect(result).toBe(7);
});

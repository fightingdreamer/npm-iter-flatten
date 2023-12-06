import { test, expect } from "vitest";
import { flatten } from "./flatten";

test.each([
  { value: [[]], expected: [] },
  { value: [[1], [2]], expected: [1, 2] },
])("flatten($value) -> $expected", ({ value, expected }) => {
  expect(Array.from(flatten(value))).toEqual(expected);
});

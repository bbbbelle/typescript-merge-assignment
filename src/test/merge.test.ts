import { merge } from "../merge";

describe("merge 3 collections", () => {
  test("basic case", () => {
    const c1 = [1, 4, 7];
    const c2 = [9, 6, 3]; 
    const c3 = [2, 5, 8];

    expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test("mixed sizes", () => {
    expect(merge([1], [5, 4, 3], [2, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

 test("duplicates", () => {
  expect(merge([1, 2], [4, 2], [2, 3])).toEqual([1, 2, 2, 2, 3, 4]);
});
});
import shuffleArray from "@/utils/shuffle";

describe("shuffleArray", () => {
  it("should return an array with the same length", () => {
    const array = [1, 2, 3, 4, 5];
    const result = shuffleArray(array);
    expect(result).toHaveLength(array.length);
  });

  it("should contain the same elements after shuffle", () => {
    const array = [1, 2, 3, 4, 5];
    const result = shuffleArray(array);
    expect(result.sort()).toEqual(array.sort());
  });

  it("should not mutate the original array", () => {
    const array = [1, 2, 3, 4, 5];
    shuffleArray(array);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle empty arrays", () => {
    const array: number[] = [];
    const result = shuffleArray(array);
    expect(result).toEqual([]);
  });

  it("should handle arrays with a single element", () => {
    const array = [1];
    const result = shuffleArray(array);
    expect(result).toEqual([1]);
  });

  // Optional: Test with different types of data
  it("should work with string arrays", () => {
    const array = ["a", "b", "c", "d"];
    const result = shuffleArray(array);
    expect(result.sort()).toEqual(array.sort());
  });

  // Optional: Test with more complex data types
  it("should work with object arrays", () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const result = shuffleArray(array);
    expect(result.map((item) => item.id).sort()).toEqual(
      array.map((item) => item.id).sort(),
    );
  });
});

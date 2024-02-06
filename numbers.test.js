import { cleanNumbers } from "./numbers";
import { it, expect } from "vitest";

it("should clean numbers", () => {
  // Arrange
  const numbers = ["1", "2", "3"];
  const expected = [1, 2, 3];

  // Act
  const result = cleanNumbers(numbers);

  // Assert
  expect(result).toEqual(expected);
});

it("should throw an error if the input is not a valid number", () => {
  // Arrange
  const numbers = ["1", "2", "a"];

  // Act
  const result = () => cleanNumbers(numbers);

  // Assert
  expect(result).toThrowError();
});

it("should throw an error if the input is empty", () => {
  // Arrange
  const numbers = ["1", "2", ""];

  // Act
  const result = () => cleanNumbers(numbers);

  // Assert
  expect(result).toThrowError("Invalid input - must not be empty.");
});

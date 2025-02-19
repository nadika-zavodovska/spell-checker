import { removeSymbolsFromWord } from "../script.js";

describe("removeSymbolsFromWord function", () => {
    test("should remove ',' before the word", () => {
        expect(removeSymbolsFromWord(",world")).toBe("world");
    });

    test("should remove '.' before the word", () => {
        expect(removeSymbolsFromWord(".mouse")).toBe("mouse");
    });

    test("should remove '!' after the word", () => {
        expect(removeSymbolsFromWord("hello!")).toBe("hello");
    });

    test("should remove '?' after the word", () => {
        expect(removeSymbolsFromWord("fine?")).toBe("fine");
    });
});
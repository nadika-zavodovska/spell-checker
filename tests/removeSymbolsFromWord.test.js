import { removeSymbolsFromWord } from "../script.js";

describe("removeSymbolsFromWord function", () => {
    test("should remove '!' before the word", () => {
        expect(removeSymbolsFromWord("!hello")).toBe("hello");
    });

    test("should remove '^' before the word", () => {
        expect(removeSymbolsFromWord("^hello")).toBe("hello");
    });
});
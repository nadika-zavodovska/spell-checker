import { removeSymbolsFromWord } from "../script.js";

describe("removeSymbolsFromWord function", () => {
    test("should remove any symbols before the word", () => {
        expect(removeSymbolsFromWord("!hello")).toBe("hello");
    })
});
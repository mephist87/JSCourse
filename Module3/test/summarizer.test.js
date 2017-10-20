import { sum } from '../src/summarizer'

describe("Summarize arguments", function () {
    it('Should return 5', function () {
        expect(sum(2)(3)()).toBe(5);
    });
    it('Should return 5', function () {
        expect(sum(2)(3)).toBe(5);
    });
    it('Should return 1', function () {
        expect(sum(1)).toBe(1);
    });
    it('Should return 10', function () {
        expect(sum(1)(2)(3)(4)).toBe(10);
    });
});
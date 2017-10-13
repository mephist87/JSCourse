import parseAmount from '../src/parseAmount'

describe("parse amount", function () {
    it('should parse integer string', function () {
        expect(parseAmount('100')).toBe(10000);
    });
    it('should parse integer string with dot', function () {
        expect(parseAmount('100.5')).toBe(10050);
    });
    it('should parse integer string with comma', function () {
        expect(parseAmount('100,53')).toBe(10053);
    });
    it('should parse integer non-numeric character as NaN', function () {
        expect(isNaN(parseAmount('kjfsdk'))).toBe(true);
    });
});
import { one, two, three, four, five, six, eight, nine } from '../src/calculator';
import { plus, minus, times, dividedBy } from '../src/calculator';

describe("Calculate expression", function () {
    it('Should return 35', function () {
        expect(seven(times(five()))).toBe(35);
    });
    it('Should return 13', function () {
        expect(four(plus(nine()))).toBe(13);
    });
    it('Should return 5', function () {
        expect(eight(minus(three()))).toBe(5);
    });
    it('Should return 3', function () {
        expect(six(dividedBy(two()))).toBe(3);
    });
});
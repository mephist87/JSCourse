import {spyOn, adder} from '../src/spyOn'

describe("SpyOn test", function () {
    let adderSpy = spyOn(adder);

    it('Plain sum test', function () {
        expect(adderSpy(2, 4)).toBe(6);
        expect(adderSpy(3, 5)).toBe(8);
    });
    it('Count test', function () {
        expect(adderSpy.callCount()).toBe(2);
    });
    it('Arguments history test', function () {
        expect(adderSpy.wasCalledWith(4)).toBe(true);
        expect(adderSpy.wasCalledWith(0)).toBe(false);
    });
    it('Return history test', function () {
        expect(adderSpy.returned(8)).toBe(true);
        expect(adderSpy.returned(0)).toBe(false);
    });
});
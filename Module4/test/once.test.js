import {joinedArgs, once} from '../src/once'

describe("Once test", function () {
    let onceJoinedArgs = once(joinedArgs);
    it('First run is non-empty', function () {
        expect(onceJoinedArgs(1, 2, 3)).toBe('1, 2, 3');
    });
    it('Second run is undefined', function () {
        expect(onceJoinedArgs(1, 2, 3)).toBe(undefined);
    });
});
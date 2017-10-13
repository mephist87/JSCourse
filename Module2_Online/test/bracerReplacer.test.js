import bracerReplacer from '../src/bracerReplacer'

describe("Replace to braces test suite", function () {
    it('description', function () {
        expect(bracerReplacer('trc')).toBe('(((');
    });
    it('description', function () {
        expect(bracerReplacer('telega')).toBe('()()((');
    })
});
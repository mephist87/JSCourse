import makeBuffer from '../src/buffer';

describe("Buffer test", function () {
    let buffer = makeBuffer();
    it('Concatenation test', function () {
        buffer('Замыкания');
        buffer(' Использовать');
        buffer(' Нужно!');
        expect(buffer()).toBe('Замыкания Использовать Нужно!');
    });
    it('Should be cleared', function () {
        buffer.clear();
        expect(buffer()).toBe('');
    });
});
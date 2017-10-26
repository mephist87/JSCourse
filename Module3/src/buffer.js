export function makeBuffer() {

    let str = '';

    function buffer(a) {
        if (a === undefined) return str;
        str += a;
        return buffer;
    }

    buffer.clear = function () {
        str = '';
    };

    return buffer;

}
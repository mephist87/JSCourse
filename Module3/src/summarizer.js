export function sum(a) {

    let accumulator = a;

    function summarizer(b) {
        if (b === undefined) {
            return accumulator;
        }
        accumulator += b;
        return summarizer;
    }

    summarizer.toString = function() {
        return accumulator;
    };

    return summarizer;
}

console.log(sum(1)(2));

// sum(2)(4)(5)(6)()
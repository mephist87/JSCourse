export function spyOn(func) {

    let callCount = 0;
    let calledWithArgumentsSet = new Set();
    let returnedSet = new Set();

    function spy() {
        callCount++;
        [].forEach.call(arguments, i => calledWithArgumentsSet.add(i));
        let result = func.apply(this, arguments);
        returnedSet.add(result);
        return result;
    }

    spy.callCount = function() {
        return callCount;
    };

    spy.wasCalledWith = function(arg) {
        return calledWithArgumentsSet.has(arg);
    };

    spy.returned = function(arg) {
        return returnedSet.has(arg);
    };

    return spy;
}

export function adder(n1, n2) {
    return n1 + n2;
}
// ============ digits ============

function buildArg(num, func) {
    if (func === undefined) {
        return num;
    } else {
        return func(num);
    }
}

export function zero(func) {
    return buildArg(0, func);
}

export function one(func) {
    return buildArg(1, func);
}

export function two(func) {
    return buildArg(2, func);
}

export function three(func) {
    return buildArg(3, func);
}

export function four(func) {
    return buildArg(4, func);
}

export function five(func) {
    return buildArg(5, func);
}

export function six(func) {
    return buildArg(6, func);
}

export function seven(func) {
    return buildArg(7, func);
}

export function eight(func) {
    return buildArg(8, func);
}

export function nine(func) {
    return buildArg(9, func);
}


// ============ operations ============


export function plus(right) {
    return function(left) {
        return left + right;
    }
}

export function minus(right) {
    return function(left) {
        return left - right;
    }
}

export function times(right) {
    return function (left) {
        return left * right;
    }
}

export function dividedBy(right) {
    return function (left) {
        return left / right;
    }
}
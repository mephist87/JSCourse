function parseAmount() {
    let arg1 = arguments[0];
    let arg2 = arguments[1];
    if (typeof(arg1) === 'string') {
        alert(parseFloat(arguments[0].replace(',','.'))*100);
    } else if (typeof(arg1) === 'number') {
        let inputString = arg1.toString();
        if (typeof (arg2) === 'number') {
            inputString = arg1 + '.' + arg2;
        }
        parseAmount(inputString);
    }
}

function bracerReplacer(input) {
    let str = input.toLowerCase();
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let firstCharIndex = str.indexOf(currentChar);
        if (str.indexOf(currentChar, firstCharIndex+1) !== -1) {
            result += ')';
        } else {
            result += '(';
        }
    }
    alert(result);
}
export default function bracerReplacer(input) {
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
    return result;
}
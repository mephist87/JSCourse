export default function parseAmount(strAmount) {
    return replaceComma(strAmount)*100;
}

export function replaceComma(str) {
    return str.replace(',','.');
}
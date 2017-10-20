export class SubstitutionCipher {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    encode(str) {
        let result = '';
        [...str].forEach(c => result += this.b.charAt(this.a.indexOf(c)));
        return result;
    }

}
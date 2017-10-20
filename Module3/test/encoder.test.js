import { SubstitutionCipher } from '../src/encoder'

const abc1 = "abcdefghijklmnopqrstuvwxyz";
const abc2 = "etaoinshrdlucmfwypvbgkjqxz";

const sub = new SubstitutionCipher(abc1, abc2);

describe("Encode characters", function () {
    it('Should encode consequent characters from start', function () {
        expect(sub.encode("abc")).toBe("eta");
    });
    it('Should encode consequent characters from end', function () {
        expect(sub.encode("xyz")).toBe("qxz");
    });
    it('Should encode arbitrary characters from any plac', function () {
        expect(sub.encode("aeiou")).toBe("eirfg");
    });
});
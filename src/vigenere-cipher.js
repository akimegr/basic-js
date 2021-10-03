import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
    direct = false;
    alph = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    s = [];

    constructor(param) {
        if (arguments.length == 0 || param) this.direct = true;

        for (var i = 0; i < this.alph.length; i++) {
            var rs = [];
            for (var j = 0; j < this.alph.length; j++)
                rs.push(this.alph[(i + j) % this.alph.length]);
            this.s.push(rs);
        }
    }

    encrypt(message, key) {
        if (arguments.length != 2 || message === undefined || key === undefined)
            throw new Error("Incorrect arguments!");

        var ans = "";
        var ckey = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();
        for (var i = 0; i < message.length; i++) {
            var ansSymb = message[i].charCodeAt();
            if (ansSymb >= 65 && ansSymb <= 90) {
                var keySC = key[ckey].charCodeAt();
                ans += this.s[ansSymb - 65][keySC - 65];
                ckey++;
                ckey %= key.length;
            } else {
                ans += message[i];
            }
        }

        if (this.direct) return ans;
        else return ans.split("").reverse().join("");
    }

    decrypt(message, key) {
        if (arguments.length != 2 || message === undefined || key === undefined)
            throw new Error("Incorrect arguments!");

        var ansD = "";
        var cKeyS = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();
        for (var i = 0; i < message.length; i++) {
            var ansSC = message[i].charCodeAt();
            if (ansSC >= 65 && ansSC <= 90) {
                var keySCODE = key[cKeyS].charCodeAt();

                ansD +=
                    this.s[0][(26 - keySCODE + ansSC) % 26];
                cKeyS++;
                cKeyS %= key.length;
            } else {
                ansD += message[i];
            }
        }

        if (this.direct) return ansD;
        else return ansD.split("").reverse().join("");
    }
}
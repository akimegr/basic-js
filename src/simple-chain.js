import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    ch: "",
    len: 0,
    getLength() {
        return this.len;
    },
    addLink(value) {
        let n;
        if (arguments.len == 0) n = "( )";
        else if (value === undefined) n = "( undefined )";
        else if (value === null) n = "( null )";
        else if (Number.isNaN(value)) n = "( NaN )";
        else n = "( " + value + " )";
        if (this.len == 0) this.ch += n;
        else this.ch += "~~" + n;
        this.len++;
        return this;

    },
    removeLink(position) {
        if (
            Number.isInteger(position) &&
            position >= 1 &&
            position <= this.len
        ) {
            if (this.len == 1) {
                this.ch = "";
                this.len = 0;
            } else {
                let m = this.ch.split("~~")
                this.ch = m.slice(0, position - 1).join("~~");
                this.len--;
            }
            return this;
        } else {
            this.ch = "";
            this.len = 0;
            throw new Error("You can't remove incorrect link!");
        }

    },
    reverseChain() {
        this.ch = this.ch.split("~~").reverse().join("~~");
        return this;
    },
    finishChain() {
        let t = this.ch;
        this.ch = "";
        this.len = 0;
        return t;
    },
};
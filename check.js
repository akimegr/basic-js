function addLink(value) {
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

}
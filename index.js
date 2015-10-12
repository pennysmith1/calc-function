function Calculator () {
    this.total = 0;
}

Calculator.prototype.add = function () {
    for (var index in arguments) {
        this.total += arguments[index];
    }
    return this;
};

Calculator.prototype.power = function () {
    for (var index in arguments) {
        this.total = Math.pow(this.total, arguments[index]);
    }
    return this;
};

Calculator.prototype.subtract = function () {
    for (var index in arguments) {
        this.total -= arguments[index];
    }
    return this;
};

Calculator.prototype.divide = function () {
    for (var index in arguments) {
        this.total /= arguments[index];
    }
    return this;
};

Calculator.prototype.multiply = function () {
    for (var index in arguments) {
        this.total *= arguments[index];
    }
    return this;
};

Calculator.prototype.root = function () {
    for (var index in arguments) {
        this.total = Math.sqrt(this.total, arguments[index]);
    }
    return this;
};

Calculator.prototype.abs = function () {
    this.total = Math.abs(this.total);
    return this;
};

Calculator.prototype.equals = function () {
    return this.total;
};

Calculator.prototype.clear = function () {
    this.total = 0;  
    return this;
};

module.exports = Calculator;
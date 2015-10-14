//Возвращает новый массив, не меняя исходный.
Array.prototype._map = function (func) {
    if (typeof func != "function")
        throw new Error("Invalid argument");
    var res=[];
    var i;
    for (i = 0; i < this.length; i++) {
        res[i] = func(this[i]);
    }
    return res;
};

//Side-effect.
Array.prototype._each = function (func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
};

Function.prototype._bind = function (self) {
    var _this = this;
    return function () {
        return _this.apply(self, arguments);
    }
};

//Возвращает новый массив, не меняя исходный.
Array.prototype._concat = function () {
    var res = [];
    var i;
    var el;
    var j;
    for (i in this) {
        el = this[i];
        res.push(el);
    }
    for (i in arguments) {
        el = arguments[i];
        if (typeof el == "object" && el.length > 0) {
            for (j in el) {
                res.push(el[j]);
            }
        } else {
            res.push(el);
        }
    }
    return res;
};

//Возвращает измененный исходный объект.
Object.prototype._assign = function () {
    var i;
    var el;
    var v;
    var j;
    var k;
    for (i in arguments) {
        el = arguments[i];
        if (typeof el != "object")
            throw new Error("Invalid arguments");
        for (j in el) {
            v = el[j];
            if (typeof v == "object") {
                for (k in v) {
                    this[k] = v[k];
                }
            } else {
                this[j] = v;
            }
        }
    }
};


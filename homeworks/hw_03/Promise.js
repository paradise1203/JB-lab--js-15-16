/**
 * Создать конструктор Promise для отложенный асинхронных вызовов
 * с поной спецификацией можно ознакомиться тут:
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * так же советуется ознакомиться с jQuery.deferred
 *
 * @example
 * var deferred = new Promise(function(resolve, reject){...})
 * deferred.then(function(data){...});
 * deferred.catch(function(data){...});
 * deferred.then(onResolved, onRejected);
 *
 * @param {Function} funcWithAnAsync(resolve, reject) - функция, содержащуя асинхронный код,
 * Аргументами в funcWithAnAsync поступают методы resolve(data) & reject(data), вызов который сменяет состояние
 * возвращаемого объекта с "ожидание"(pending) на "завершено"(fulfilled) и "отклонено"(rejected) соответственно
 *
 *
 * @return {Object} deferred
 * deferred.state() => состояние промиса ('pending','fulfilled','rejected')
 * deferred.then(onResolved, [onRejected]) => deferred - функция принимающая в себя обработчики изменения состояния промиса
 * deferred.catch(onRejected) => deferred - функция принимающая только обработчик ошибки
 * При этом обработчики onResolve & onReject аргументом принимают значение, переданное в resolve / reject соответственно.
 * Если в resolve / reject не были переданы данные, то подставить заместо них булевы значения.
 *
 * -- test your might
 * Конструктор Promise может принимать множество функций, тогда
 * deferred.state() => [state]
 * deferred.then(onAllResolved, [onAnyRejected, onAnyResolved]) => deferred
 * deferred.catch(onAnyRejected) => deferred
 * deferred.any(onAnyResolved) => deferred
 * onAllResolved(data[0], ...data[i]),onAnyRejected(data[0], ...data[i]), onAnyResolved(data[0], ...data[i]) - принимают данные
 * с resolve / reject в порядке переданных в конструктор функций.
 * При этом: onAnyRejected - получает только данные об ошибках, колличество аргументов константно (на месте, где вызвался resolve, аргумент == undefined)
 * для onAnyResolved соответсвенно наоборот.
 */
Promise = function(funcWithAnAsync) {
    var _this = this;
    _this.s = 'pending';
    _this.state = function () {
        return _this.s;
    };
    _this.asyncFunc = funcWithAnAsync;
    var resolve = function (data) {
        if (arguments.length == 0) {
            data = true;
        }
        _this.resolveData = data;
        console.log(data);
        _this.s = 'fulfilled';
    };
    var reject = function (data) {
        if (arguments.length == 0) {
            data = false;
        }
        _this.rejectData = data;
        console.log(data);
        _this.s = 'rejected';
    };
    _this.then = function (onResolved, onRejected) {
        if (!_this.onResolved && !_this.onRejected) {
            _this.onResolved = onResolved;
            _this.onRejected = onRejected;
        }
        if (_this.s == 'pending') {
            setTimeout(_this.then, 1000);
        }
        else if (_this.onRejected && _this.s == 'rejected') {
            _this.onRejected(_this.rejectData);
            return new Promise(_this.asyncFunc);
        } else if (_this.s == 'fulfilled') {
            _this.onResolved(_this.resolveData);
            return new Promise(_this.asyncFunc);
        }
    };
    _this.catch = function (onRejected) {
        if (!_this.onRejected) {
            _this.onRejected = onRejected;
        }
        if (_this.s == 'pending') {
            setTimeout(_this.catch, 1000);
        } else if (_this.onRejected && _this.s == 'rejected') {
            _this.onRejected(_this.rejectData);
            return new Promise(_this.asyncFunc);
        }
    };
    _this.asyncFunc(resolve, reject);
};
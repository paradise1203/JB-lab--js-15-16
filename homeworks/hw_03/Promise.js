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
Promise = function(funcWithAnAsync){

};
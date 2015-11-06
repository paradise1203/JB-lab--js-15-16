function checkArgs(args) {
    if (args.length == 0) {
        return false;
    }
    var type = typeof args[0];
    if (type != 'object' && type != 'function') {
        return false;
    }
    var props = args[1];
    return !(props && typeof props != 'object');
}
/**
 * Object.create(proto[, propertiesObject])
 * Создаёт объект - наследник proto.
 *
 * @param {Object, Function, null} proto - объект, который станет прототипом вновь созданного объекта.
 *
 * @param {Object} propertiesObject - необязательный объект, чьи поля будут добавленый в новосозданный объект
 *
 * @return {Object}
 *
 * Подробнее по методу можно посмотретьпо спецификации ES5
 */
Object.prototype.create = function(proto) {
    if (!checkArgs(arguments)) {
        throw new Error('Invalid arguments!');
    }
    var f = function () {
    };
    f.prototype = proto;
    var res = new f();
    if (arguments.length > 1) {
        var propertiesObject = arguments[1], el;
        for (el in propertiesObject) {
            res[el] = propertiesObject[el];
        }
    }
    return res;
};


/**
 * -- test your might
 * node - функция построение дерева.
 * Вызов функции создаёт у текущего узла дочерний с именем name и возвращает созданный узел,
 * который в свою очередь является точно такой же функцией node.
 * При вызове node, как конструктора будет создаваться корневой узел, не имеющий родителя
 *
 * @example
 * var a,b,c,d,e,f;
 * a = new node('root');
 * b = a('b');
 * c = a('c');
 * d = b('d');
 * e = b('e');
 * f = e('f');
 * e.getPath() // 'root/b/f/e'
 * структура всего дерева: root:[b:[d,e:[f]],c]
 *
 * @param {String} name - имя узла
 *
 * @method getChild() => массив всех дочерних узлов
 *
 * @method getPath() => путь от корневого до текущего узла
 *
 * @method getName() => name
 *
 * @return {Function} node
 */
function node(name){

}


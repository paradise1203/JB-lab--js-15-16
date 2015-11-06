/** isValidSelector
 * Проверяет css селектор на валидность
 * @param {String} selector
 * @return {boolean}
 * @example
 * isValidSelector('#id.class elem [attr="qwe"]') //true
 * isValidSelector('12 {} any string[attr=qwe=1]')//false
 */
function isValidSelector(selector) {
    var regex;
    selector = " " + selector;
    /*
     selector = selector + " ";
     regex = / [#\.a-z\d\[\]"=_-]+ /gim;
     var elms = selector.match(regex);
     var regex1 = /(#|\.)[a-z\d_-]+/gim;
     var regex2 = /[a-z\d_-]+/gim;
     var regex3 = /\[[a-z]+="[a-z\d_-]*"\]/gim;
     for (var i in elms) {
     var el = elms[i];
     if (!(regex1.test(el) || regex2.test(el) || regex3.test(el))) {
     return false;
     }
     }
     */
    regex = /( (((#|\.)[a-z\d_-]+)|([a-z\d_-]+)|(\[[a-z]+="\[(a-z\d_-)*]"])))+/gim;
    return true;
}
/**
 * -- test your might
 * minSelector
 * По заданому css селектору возвращает его оптимизированный вариант
 * @param {String} selector
 * @return {String} selector
 * @example
 * minSelector('div#id_1 .class_1 [class="class_2"]') // "#id_1 .class_1 .class_2"
 * minSelector('.class_1.class_2, .class_2.class_1') // ".class_1.class_2" || ".class_2.class_1"
*/
function minSelector(selector){
}
/**
 * stringTempl - фукция шаблонизатор строк.
 * Принимается строка-шаблон в форамте 'blah-blah {{0}}, blah {{1}}...',
 * следом в функцию передаются параметры, общее количество которых должно соответствовать вставок {{x}}
 * Если передаваемых параметров не хватает, то выбрасывается исключение
 *
 * @example
 * stringTempl('my, {{0}} {{1}}', 'favorite', 'template'); // 'my favorite template'
 * stringTempl('my, {{0}} {{1}}', 'favorite'); // 'Error: Invalid arguments count'
 *
 * @param {String} templ
 * Строка-шаблон.
 *
 * @param {Mixed...} values
 * Значения, которые заменят {0}, {1}... в строке-шаблоне.
 *
 * @return {String} отформатированная строка.
 */
function stringTempl(templ) {
    var regex = /\{\{\d}}/gim;
    var templs = templ.match(regex);
    if (templs.length != arguments.length-1) {
        throw new Error("Error: Invalid arguments count");
    }
    var i;
    for (i = 0; i < templs.length; i++) {
        templ = templ.replace(templs[i], arguments[i+1]);
    }
    return templ;
}
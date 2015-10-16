/**
 * Задание 1. Создать функцию toGetParams, формирующую из
 * объекта строку параметров для GET-запроса.
 *
 * @example
 * var params = toGetParams({p1: 1, p2: 'hello'}); // p1=1&p2=hello
 *
 * @param {Object} obj
 * Объект, из которого будут формироваться строка параметров.
 *
 * @return {String} строка параметров.
 */
function toGetParams(obj){
}
/**
 * Задание 2. Создать функцию formatUrl, формирующую из базового url и объекта
 * строку GET-запроса.
 *
 * @example
 * var getUrl = formatUrl('http://example.com', {a: 1, b: 2}); // 'http://example.com?a=1&b=2'
 *
 * @param {String} url
 * Базовый url
 *
 * @param {Object} obj
 * Объект, из которого будут формироваться строка параметров.
 *
 * @return {String} сформированный url.
 */
function formatUrl(url, obj){
}
/**
 * Задание 3. Создать функцию objectFromUrl, формирующую из базового url
 *
 *
 * @example
 * var obj = objectFromUrl('http://example.com/homeworks/hw_01?task=03&team=kkk#jsjs');
 * obj == {
 *      protocol:'http',
 *      host:'example.com',
 *      port:'',
 *      pathname:'/homeworks/hw_01',
 *      hash:'#jsjs',
 *      originQuery:'?task=03&team=kkk',
 *      query:{
 *          'task':'01',
 *          'team':'kkk'
 *      }
 *
 * @param {String} url
 * Базовый url
 *
 * @return {Object} сформированный obj.
 */
function objectFromUrl(url){
}
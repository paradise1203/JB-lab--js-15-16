/**
 * ������� 1. ������� ������� toGetParams, ����������� ��
 * ������� ������ ���������� ��� GET-�������.
 *
 * @example
 * var params = toGetParams({p1: 1, p2: 'hello'}); // p1=1&p2=hello
 *
 * @param {Object} obj
 * ������, �� �������� ����� ������������� ������ ����������.
 *
 * @return {String} ������ ����������.
 */
function toGetParams(obj){
}
/**
 * ������� 2. ������� ������� formatUrl, ����������� �� �������� url � �������
 * ������ GET-�������.
 *
 * @example
 * var getUrl = formatUrl('http://example.com', {a: 1, b: 2}); // 'http://example.com?a=1&b=2'
 *
 * @param {String} url
 * ������� url
 *
 * @param {Object} obj
 * ������, �� �������� ����� ������������� ������ ����������.
 *
 * @return {String} �������������� url.
 */
function formatUrl(url, obj){
}
/**
 * ������� 3. ������� ������� objectFromUrl, ����������� �� �������� url
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
 * ������� url
 *
 * @return {Object} �������������� obj.
 */
function objectFromUrl(url){
}
function parseObj(obj) {
    var i, res = "";
    for (i in obj) {
        if (res.length != 0) {
            res += "&";
        }
        res += i + "=" + obj[i];
    }
    return res;
}
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
function toGetParams(obj) {
    if (typeof obj != "object") {
        throw new Error("Invalid argument");
    }
    return parseObj(obj);
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
function formatUrl(url, obj) {
    if (typeof url != "string" || typeof obj != "object") {
        throw new Error("Invalid arguments");
    }
    var res = parseObj(obj);
    if (res != "") {
        return url + "?" + res;
    } else {
        return url;
    }
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
function objectFromUrl(url) {
    if (typeof url != "string") {
        throw new Error("Invalid argument");
    }
    var res = {};
    res.protocol = url.match(/[^:\/]+/i)[0];
    url = url.replace(res.protocol, "");
    res.host = url.match(/([^\/]+\.[^\/:]+)+/i)[0];
    url = url.replace(res.host, "");
    res.port = url.match(/\d+/i)[0];
    url = url.replace(res.port, "");
    res.pathname = url.match(/(\/[^\?\/:]+)+/i)[0];
    url = url.replace(res.pathname, "");
    res.hash = url.match(/#[a-z\d_-]+/i)[0];
    res.originQuery = url.match(/\?[^#]+/i)[0];
    res.query = {};
    var params = url.match(/[^\?=&]+=[^&#]+/gi);
    for (var i in params) {
        var el = params[i];
        var pair = el.match(/[^=]+/gi);
        res.query[pair[0]] = pair[1];
    }
    return res;
}
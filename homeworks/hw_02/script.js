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
    if (typeof url != "string" && !checkUrl(url)) {
        throw new Error("Invalid argument");
    }
    var i = 0, c, state = 0, temp = "", regex, res;
    //ннаверное, плохая идея, но больше ничего не придумал) не закончил, решил скинуть пока, что есть.
    while (i < url.length) {
        c = url.charAt(i);
        switch (state) {
            case 0:
            {
                if (c == ":") {
                    state = 1;
                } else {
                    temp += c;
                }
            }
                break;
            case 1:
            {
                regex = /[0-9]/gim;
                if (regex.test(c)) {
                    res.host = temp;
                    temp = c;
                    state = 3;
                } else {
                    res.protocol = temp;
                    temp = "";
                    state = 2;
                }
            }
                break;
            case 2:
            {
                regex = /[a-zA-Z0-9_-]/gim;
                if (regex.test(c)) {
                    temp += c;
                }
            }
        }
    }
    return res;
}

function checkUrl(url) {
    var regex = /^http|https:\/\/[a-zA-Z0-9_-]+(\.[a-z]+)+(\/[a-zA-Z0-9_-]+)*(\?([a-zA-Z0-9_-]+=[a-zA-Z0-9_-]+)+)?/gim;
    return regex.test(url);
}
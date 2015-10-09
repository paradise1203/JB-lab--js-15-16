/**
 * ������� 1. ������� ������� multiply, ������������� ���������,
 * ���������� � �������� ����������. ���� ���������� ��������� �� ��������
 * ��������� �������, ���� � ��������� ����� ���� ����������,
 * ����������� ������ "Invalid arguments"
 * (����������� throw new Error("Invalid arguments")).
 *
 * @example
 * var result = multiply(1,2); // 2
 *
 * @param {Number} a,b,c,d
 * ����� ��� ������������. ���������� ������� ����� ������������*
 * @return {Number} ������������ ���� ����������.
 */
function multiply(a,b,c,d){
    console.log(arguments);
	if (arguments.length<2)
        throw new Error("Invalid arguments");
    var i;
    var n;
    var res=1;
    for (i=0; i<arguments.length; i++) {
        n = arguments[i];
        if (typeof n === "number" && n===n)
            res*=n;
        else 
            throw new Error("Invalid arguments");
    }
    return res;
}
/**
 * ������� 2. ������� ������� factorial ��� �������� ����������. ������� � �������� ���������
 * ��������� ����� �����. ����������� ���������� ����� ��������� (������������ ���� �����,
 * ������� � 1 �� ������ ����� ������������) ����� �����.
 *
 * @example
 * var fact = factorial(5); // 1*2*3*4*5 = 60
 *
 * @param {Number} n
 * �����, ��� �������� ��������� ���������.
 *
 * @return {Number} ��������� �����.
 */
function factorial (n) {
    console.log(arguments);
    if (n!==n || typeof n !== "number" || n<0)
        throw new Error("Invalid argument");
	if (n === 0)
        return 1; 
    return n*factorial(n-1);
}
/**
 * ������� 3. ������� ������� pow ��� ���������� ����� � �������. ������� � �������� ���������
 * ��������� ����� � ����� �����.
 *
 * @example
 * var pow_2_4 = pow(2,4); // 16
 *
 * @param {Number} a
 * �����, ������� �������� � �������.
 *
 * @param {Number} b
 * ����� �����, ���������� �������.
 *
 * @return {Number} a^b.
 */
function pow (a,b) {
    console.log(arguments);
    if (typeof a!=="number" || typeof b!=="number" || a!==a || b!==b)
        throw new Error("Invalid arguments");
	var i;
    var res=1;
    if (b>=0)
        for (i=0; i<b; i++)
            res*=a;
    else 
        for (i=0; i>b; i--)
            res/=a;
    return res;
}
/**
 * ������� 3. ������� ������� repeat.
 *
 * @example
 * var txt = repeat('hello', 3, '-'); // 'hello-hello-hello'
 * var txt2 = repeat('hello', 3); // 'hellohellohello'
 *
 * @param {String} str
 * ������, ������� ����� �����������.
 *
 * @param {Number} count
 * ���������� ����������.
 *
 * @param {String} [sep]
 * ����������� (�������������� ��������).
 *
 * @return {String} ������ � ������������.
 */
function repeat(str, count, sep){
    console.log(arguments);
    if (typeof count !== "number" || count!==count || str!==str || sep!==sep)
        throw new Error("Invalid arguments");
	var i;
    var res="";
    var hasSep = typeof sep !== "undefined"; 
    for (i=0; i<count; i++) {
        res+=str;
        if (hasSep && i !== count-1)
            res+=sep;
    }
    return res;
}
/**
 * ������� 4. ������� ������� compare. ������������ ��� �������. ��������� �����������.
 *
 * @example
 * var a, b, c;
 * a = {'q':1,'b':2};
 * b = {'q':1,'b':2};
 * c = {'q':1,'b':3};
 * compare(a,b) //true
 * compare(b,c) //false
 *
 * @param {Object} a
 * ������ ������
 *
 * @param {Object} b
 * ������ ������
 *
 * @return {Boolean} ��������� ���������.
 */
 //�������, ������� ������������ � ��������� ���� ��������. 
 function getSize(obj) {
    var el;
    var res = 0; 
    for (el in obj)
        if (obj.hasOwnProperty(el))
        res++;
    return res;
}

function compare(a, b){
    console.log(arguments);
	if (typeof a !== "object" || typeof b !== "object")
        throw new Error("Invalid arguments");
    if (getSize(a) !== getSize(b))
        return false;
    for (var el in a) {
        var f = a[el];
        var s = b[el];
        if (typeof f === "object" && typeof s === "object")
            return compare(f, s); 
        else if (f !== s)
            return false;
    }
    return true; 
}
/**
 * ������� 5. ������� �������-������� ���������� ���� phoneList, ��������� ��������� ����.
 * @param {String} name
 * ��� ����������� �����
 *
 * @return {Function} ������� ���������� � ���������� ����. ��������� ��� ����������: name, num -
 * ��� �������� � ����� ��������������
 * ������� ������ ����� � ���� ���� name, ���������� ��� ��������.
 * � ����� �������:
 * @method {Object} getAll - ���������� ��� �������� �����.
 * @method getForName(name) - ���������� ����� �������� �� �����.
 * @method getForNum(num) - ���������� ��� �������� �� ������.
 * @method {Number} getLength - ���������� ���������� ���� ���������.
 *
 * @example
 * var myList = phoneList("friends");
 * myList('me', 123);
 * myList('you',321);
 * myList.name // "friends"
 * myList.getLength() // 2
 * myList.getForName('me') // 123
 * myList.getForNum(321) // "you"
 * myList.getAll() // {'me':123,'you':321}
 *
 */
function phoneList(name){
	var list = { } 
    var res = function (name, num) {
        list[name] = num;
    }
    res._name = name;
    res.getAll = function() {
        return list; 
    }
    res.getForName = function(name) {
        return list[name];
    }
    res.getForNum = function(num) {
        for (var el in list)
            if (list[el]===num)
                return el;
    }
    res.getLength = function() {
        return getSize(list);
    }
    return res;
}
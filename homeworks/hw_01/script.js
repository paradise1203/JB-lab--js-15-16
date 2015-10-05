/**
 * Задание 1. Создать функцию multiply, перемножающаю аргументы,
 * переданных в качестве аргументов. Если переданные аргументы не являются
 * конечными числами, либо в отсуствии менее двух аргументов,
 * выбрасывать ошибку "Invalid arguments"
 * (используйте throw new Error("Invalid arguments")).
 *
 * @example
 * var result = multiply(1,2); // 2
 *
 * @param {Number} a,b,c,d
 * Числа для перемножения. Количество входных чисел неограничено*
 * @return {Number} Произведение всех аргументов.
 */
function multiply(a,b,c,d){

}
/**
 * Задание 2. Создать функцию factorial для подсчета факториала. Функция в качестве параметра
 * принимает целое число. Результатом выполнения будет факториал (произведение всех чисел,
 * начиная с 1 до самого числа включительно) этого числа.
 *
 * @example
 * var fact = factorial(5); // 1*2*3*4*5 = 60
 *
 * @param {Number} n
 * Число, для которого считается факториал.
 *
 * @return {Number} факториал числа.
 */
function factorial (n) {

}
/**
 * Задание 3. Создать функцию pow для возведения числа в степень. Функция в качестве параметра
 * принимает число и целое число.
 *
 * @example
 * var pow_2_4 = pow(2,4); // 16
 *
 * @param {Number} a
 * Число, которое возводят в степень.
 *
 * @param {Number} b
 * Целое число, показатель степени.
 *
 * @return {Number} a^b.
 */
function pow (a,b) {

}
/**
 * Задание 3. Создать функцию repeat.
 *
 * @example
 * var txt = repeat('hello', 3, '-'); // 'hello-hello-hello'
 * var txt2 = repeat('hello', 3); // 'hellohellohello'
 *
 * @param {String} str
 * Строка, которая будет повторяться.
 *
 * @param {Number} count
 * Количество повторений.
 *
 * @param {String} [sep]
 * Разделитель (необязательный параметр).
 *
 * @return {String} Строка с повотрениями.
 */
function repeat(str, count, sep){

}
/**
 * Задание 4. Создать функцию compare. Сравнивающую два объекта. Валидация парамметров.
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
 * Первый объект
 *
 * @param {Object} b
 * Второй объект
 *
 * @return {Boolean} результат сравнения.
 */
function compare(a, b){

}
/**
 * Задание 5. Создать функцию-фабрику телефонных книг phoneList, создающую телефоный лист.
 * @param {String} name
 * Имя телефонного листа
 *
 * @return {Function} Функция добавления в телефонный лист. Принемает два парамметра: name, num -
 * имя контакта и номер соответственно
 * Функция должна иметь в себе поле name, переданное при создании.
 * И набор методов:
 * @method {Object} getAll - возвращает все контакты листа.
 * @method getForName(name) - возвращает номер контакта по имени.
 * @method getForNum(num) - возвращает имя контакта по номеру.
 * @method {Number} getLength - возвращает количество всех контактов.
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

}
var data = {
    'multiply': [
        [5, [5, 1, 1]],
        [10, [5, 2]],
        [30, [1, 2, 3, 5]],
        [15, ['a', 5]],
        [10, [5]]
    ],
    'factorial': [
        [1, [0]],
        [1, [1]],
        [2, [2]],
        [6, [3]],
        [24, [4]],
        [10, [-1]]
    ],
    'pow': [
        [16, [2, 4]],
        [25, [5, 2]],
        [-125, [-5, 3]],
        [0.25, [2, -2]]
    ],
    'repeat': [
        ['1-1-1', [1, 3, '-']],
        ['aaa', ['a', 3]],
        ['ax,ax,ax', ['ax', 3, ',']]
    ],
    'compare': [
        [true, [{'a': 1, 'b': 2}, {'a': 1, 'b': 2}]],
        [false, [{'a': '1', 'b': '2'}, {'a': '1', 'b': '2', 'c': '3'}]],
        [true, [{'a': [1, 2, 3], 'b': 2}, {'a': [1, 2, 3], 'b': 2}]],
        [true, [{'a': [1, 2, 3, 4], 'b': 2}, {'a': [1, 2, 3], 'b': 2}]],
        [true, [{'a': [1, 2, 3], 'b': {'a1': 'a1'}}, {'a': [1, 2, 3], 'b': {'a1': 'a1'}}]]
    ],
    'phoneList': [
        //такая форма тестов не подходит для этой функции.
    ]
};

function testFunction(name, arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i][0] == window[name].apply(this, arr[i][1]));
    }
}

function test(data) {
    for (var el in data) {
        console.log(el);
        testFunction(el, data[el])
    }
}

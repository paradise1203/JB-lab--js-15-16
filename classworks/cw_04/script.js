document.addEventListener('DOMContentLoaded', function () {
    function click() {
        var text = document.querySelector('#text').value;
        var regex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z]+$/gim;
        if (regex.test(text)) {
            document.querySelector('#result').innerText = 'Ok';
        } else {
            document.querySelector('#result').innerText = 'Wrong';
        }
    }
    //hhp.html, hhp.text
    document.querySelector('.button').addEventListener('click', click)
});

function hhp(selector) {
    var res = document.querySelectorAll(selector);
    res.html = function (html) {
        var i;
        if (arguments.length == 0) {
            return res[0].innerHTML;
        } else {
            for (i in res) {
                res[i].innerHTML = html;
            }
        }
    };
    res.text = function (text) {
        var i;
        if (arguments.length == 0) {
            return res[0].innerText;
        } else {
            for (i in res) {
                res[i].innerText = text;
            }
        }
    };
    return res;
}

/*
var str, regex;
str = 'exoooy@gmail.com';
regex = /^[a-zA-z0-9_]@[a-zA-z0-9_].[a-zA-z]]/gim;
str.match(regex);
regex.exec(str);
regex.test(str);
*/

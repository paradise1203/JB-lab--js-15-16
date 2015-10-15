document.addEventListener('DOMContentLoaded',function(){
    function click(e){
        //validate Email
        text = document.querySelector('input')
            .value;
    }
    document.querySelector('.button').
        addEventListener('click',click);

    function hhp(selector){

    }
    //hhp.html(string), hpp.text
    //var array= hhp('div');
    //array.html(); string?array: a[0].html
    //array.text();
    //array.html().html().text().html()
});
//'tagName#id.class[attr=someone]'

var str, regex;
str = 'qwerty';
regex = new RegExp('^qwe','gim');
regex = /^qwe/gim;

str.match(regex);
regex.exec(str);
regex.test(str);

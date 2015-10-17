$(function(){
    var temp;
    temp = doT.template(
        $('#temp1').text()
    );
    console.log(temp('Hello world'));
    $('body').html(temp([1,2,3,4,5,6,6]))
});
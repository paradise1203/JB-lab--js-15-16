$(function(){
    var temp;
    temp = doT.template(
        $('#temp1').text()
    );
    /*
     console.log(temp('Hello World!'));
     $('body').html(temp([1, 2, 3, 4, 5, 6]));
     */

    $("#send").click(function () {
        var color = $("select").val();
        var message = $("<div>").append(
            temp({
                text: $("#message").val(),
                date: new Date()
            })
        );
        message.css("background-color", color);
        $("#dialog").append(message);
    });
});

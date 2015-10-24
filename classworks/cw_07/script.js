/*
var f = function () {
    console.log(1);
    requestAnimationFrame(f);
};
requestAnimationFrame(f);

var time = setTimeout(f, 1000);
clearTimeout(time);
setInterval(f, 1000);
 */

var f1 = function () {
    //console.group('aidar');
    console.log(new Date().getTime()/1000);
    console.time('aidar');


    console.timeEnd('aidar');
    //console.groupEnd('aidar');
};

var lastInvoke = 0;
var contrF1 = function (f) {
    var time = new Date().getTime();
    if (time - lastInvoke > 3000) {
        f();
    } else {
        setTimeout(f, time - lastInvoke);
    }
    lastInvoke = time;
};


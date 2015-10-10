(function(win){
    var array, array_map, array_each,b;
    array = [1,2,7,45,23,6,6,12,69,3,4,5];

    console.log(array);
    array_map = array.map(function(e){
        return 'e= ' + e;
    });
    console.log(array_map);
    function a(arr){console.log(arr);return this}
    var self = {'s':'^_^'};
    b = a.bind(self);
    console.log(b('qew'));
    Function.prototype._bind = function(self){
        var _this = this;
        return function(){_this.apply(self, arguments)}
    };
    Array.prototype._each = function(func){

    };
    Array.prototype._map = function(func){

    };
    Array.prototype._concat = function(){

    };
    Object.prototype._assign = function(){

    };

    win['hhp'] = 'returned object';
})(window);
function getEvent(){
    var timeOut, timer, isStarted;
    isStarted = false;
    function f(){
        if(!isStarted){
            // onStarted
            isStarted = true;
        }
        // onAction
        clearTimeout(timer);
        timer = setTimeout(function(){
            // save
            isStarted = false;
        }, timeOut)
    }
}

function EventBus(){
    var map = {};
    var self = this;
    this.notify = function(eventName, data){
        if (map[eventName]) {
            map[eventName].forEach(function (element){
                setTimeout(element.call(self,data),0);
            })
        }
        return self;
    };
    this.on = function(eventName, func){
        map[eventName] = map[eventName] || [];
        map[eventName].push(func);
        return self;
    };
    this.unSubscribe = function(eventName, func) {
        var i;
        if (map[eventName]) {
            for (i=0;i<map[eventName].length;i++)
                if(map[eventName][i] === func){
                    map[eventName].splice(i, i+1);
                    return self;
                }
        }
        return self;
    };
}
eventBus = new EventBus();
//eventBus.on('oO', function(event){
//    console.log(event);
//});
eventBus.on('oO', function(event){
    console.log(this);
});
//eventBus.notify('oO', {'k':'o'});
notify = eventBus.notify;
notify('oO', {'k':'o'});
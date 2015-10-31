function getEvent() {
    var timeOut, time, timer, isStarted;
    isStarted = false;
    function f() {
        if (!isStarted) {
            // onStrated
            isStarted = true;
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            //do smth
            isStarted = false;
        }, timeOut);
    }
}

function EventBus() {
    var map = {};
    var self = this;
    this.notify = function (eventName, data) {
        var mas;
        if (map[eventName]) {
            mas = map[eventName];
        } else {
            return;
        }
        mas.forEach(function (e) {
           setTimeout(e.call(self, data), 0);
        });
        return {}
    };
    this.on = function (eventName, func) {
        if (typeof func != "function") {
            throw new Error("Invalid arguments!");
        }
        map[eventName] = map[eventName] || [];
        map[eventName].push(func);
    };
    this.off = function (eventName, func) {
        if (map[eventName]) {
            var mas = map[eventName];
        }
        for (var i in mas) {
            if (mas[i] == func) {
                mas.splice(i, i+1);
            }
        }
    }
}

eventBus = new EventBus();
var f = function (event) {
    console.log(this);
};
eventBus.on('oO', function (event) {
    console.log(this);
});
eventBus.on('oO', f);
eventBus.off('oO', f);
eventBus.notify('oO', {'k' : 'o'});

(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle ("scroll", "optimizedScroll");
})();

(function() {

    var menu = document.querySelector(".context-menu");
    var menuState = 0;
    var active = "context-menu--active";
    var target;

    document.addEventListener('click', function (e) {
        toggleMenuOff();
    });

    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        toggleMenuOn();
        positionMenu(e);
        target = e.target;
    });

    window.addEventListener("optimizedScroll", function() {
        toggleMenuOff();
        console.log('!');
    });

    function toggleMenuOn() {
        if (menuState == 0) {
            menuState = 1;
            menu.classList.add(active);
        }
    }

    function toggleMenuOff() {
        if (menuState == 1) {
            menuState = 0;
            menu.classList.remove(active);
        }
    }

    function getPosition(e) {
        var posx = 0;
        var posy = 0;

        if (!e) var e = window.event;

        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
        }

        return {
            x: posx,
            y: posy
        }
    }

    function positionMenu(e) {
        var menuPosition = getPosition(e);
        var menuPositionX = menuPosition.x + "px";
        var menuPositionY = menuPosition.y + "px";

        menu.style.left = menuPositionX;
        menu.style.top = menuPositionY;
    }

    document.querySelector('.select').addEventListener('click', function (e) {
        target.style.backgroundColor = 'red';
    });

    document.querySelector('.getCSSSelector').addEventListener('click', function (e) {
        document.querySelector('.footer').innerHTML = getCssSelectors(target);
    });

    function getCssSelectors(el) {
        var res = "";
        if (el.parentNode.parentNode.parentNode != null) {
            res += getCssSelectors(el.parentNode) + " " + el.selector;
        }
        return res += el.selectors;
    }

})();
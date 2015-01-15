/**
 * Created by azq on 2015/1/14.
 */
;
(function () {
    var sHeight = window.innerHeight;
    var sWidth = window.innerWidth;
    var isDown = false;
    var isTop = false;
    var wrap = document.getElementById("wrap");
    var show = document.getElementsByClassName("show");
    var page = document.getElementsByClassName("page");
    var index = 0;
    var startY = 0;
    var D = 0;
    var s = sWidth / 320;
    var ss = 160 * (1 - s);
    show[0].style.webkitTransform = 'scale(' + s + ',' + s + ') translate(0px,-' + ss + 'px)';
    show[0].style.height = sHeight + "px";
    for (var i = 0; i < page.length; i++) {

        page[i].style.height = sHeight + "px";
        page[i].setAttribute("id", "page-" + i)
    }
    for (var i = 0; i < page.length; i++) {
        document.getElementById("page-" + i).addEventListener('touchstart', function (e) {
            e.preventDefault();
            var touch = event.targetTouches[0];
            startY = touch.pageY;
        }, false);
        document.getElementById("page-" + i).addEventListener('touchmove', function (e) {
            e.preventDefault();
            var touch = event.targetTouches[0];
            var Y = touch.pageY;
            D = startY - Y;

        }, false);
        document.getElementById("page-" + i).addEventListener('touchend', function (e) {
            e.preventDefault();
            if(D < 150 && D > 0){}
            if(D >= 150){
                //alert(D);
                isDown = true;
                if (index >= page.length - 1) {
                    isDown = false;
                    index--;
                }
                index++;
                moveV(index);
            }
            if(D > -150 && D < 0){}
            if(D <= -150){
                //alert(D);
                isTop = true;
                if (index <=0) {
                    isTop = false;
                    index++;
                }
                index--;
                moveV(index);
            }

        }, false);
    }

    function moveV(i) {
        //if(direction == 2){i = -i}
        if (isTop || isDown) {
            wrap.style.top =-i * sHeight + "px";
            wrap.style.transition = "top 2s ease 0";
            isTop = false;
        }
       /* if (isDown) {
            wrap.style.top = -i * sHeight + "px";
            wrap.style.transition = "top 2s ease 0";
            isDown = false;
        }*/

    }
})()


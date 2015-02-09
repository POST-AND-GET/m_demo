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
            var touch = event.targetTouches[0];
            startY = touch.pageY;
        }, false);
        document.getElementById("page-" + i).addEventListener('touchmove', function (e) {
            e.preventDefault();
            var touch = event.targetTouches[0];
            var Y = touch.pageY;
            D = startY - Y;
            if(D < 100 && D > 0){}
            if(D > -100 && D < 0){}
        }, false);
        document.getElementById("page-" + i).addEventListener('touchend', function (e) {
            if(D >= 100){
                //alert(D);
                isDown = true;
                if (index >= page.length - 1) {
                    isDown = false;
                    index--;
                }
                index++;
                moveVertical(index);
            }
            if(D <= -100){
                //alert(D);
                isTop = true;
                if (index <=0) {
                    isTop = false;
                    index++;
                }
                index--;
                moveVertical(index);
            }
        }, false);
    }
    function moveVertical(i) {
        if (isTop || isDown) {
            wrap.style.top =-i * sHeight + "px";
            wrap.style.webkitTransition = "top 1s cubic-bezier(1,1,1,1) 0";
            wrap.style.transition = "top 1s cubic-bezier(1,1,1,1) 0";
            isTop = false;
        }
    }
    eventInit();//恢复元素的默认事件
    function eventInit(){
        document.getElementById("asd").addEventListener('touchmove', function (e) {
            e.stopPropagation();
        }, false);
    }
})()


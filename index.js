/**
 * Created by azq on 2015/1/14.
 */
;(function(){
    var sHeight = window.innerHeight;
    var sWidth = window.innerWidth;
    var isA = false;
    var wrap = document.getElementById("wrap");
    var show = document.getElementsByClassName("show");
    var page = document.getElementsByClassName("page");
    var index = 0;
    var s = sWidth/320;
    var ss = 160*(1-s);
    show[0].style.webkitTransform = 'scale('+s+','+s+') translate(0px,-'+ss+'px)';
    show[0].style.height = sHeight + "px";
    for(var i = 0;i<page.length;i++){

        page[i].style.height = sHeight + "px";
        page[i].setAttribute("id","page-"+i)
    }
    for(var i=0; i<page.length; i++){
        document.getElementById("page-"+i).addEventListener('click',function(){
            isA = true;
            if(index>=page.length-1){isA = false;};
            index++;
            moveDown(index);
        },false);
    }

    function moveDown(i){
        if(isA){
            wrap.style.top = -i*sHeight+"px";
            wrap.style.transition = "top 2s ease 0";
        }

    }


})()


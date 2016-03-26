var gate=$("#gate");
var developer=$("#developer");
var artist=$("#artist");
var developerPage=$("#developerPage");
var artistPage=$("#artistPage");
//页面一进来的鼠标滑动效果
var hover=true;
var gateHover=function(){
        developer.on("mouseover",function(){
            if(hover){
                $(this).width("65%");
            }

        });
        artist.on("mouseover",function(){
            if(hover){
                developer.width("50%");
            }
        });
        gate.addClass("init").removeClass("now-dev now-art");
        $(".imgs").hide();
    $("ul").css("transform","translateX(0)");
    $(".scrollBar").css("transform","translateX(0)");
};
//点击page
var pageEnter=function(obj,nowClass){
    hover=false;
    if(obj==developer){
        developer.width("90%");
        //alert("no");
    }else if(obj==artist){
        developer.width("10%");
    }
    obj.find(".imgs").show().css("opacity","1");
    gate.removeClass("init").addClass(nowClass);
};
//进入page
developerPage.on("click",function(){
    if(gate.hasClass("init")){
        pageEnter(developer,"now-dev");
    }else{
        hover=true;
        gateHover();
    }
});
artistPage.on("click",function(){
    if(gate.hasClass("init")){
        pageEnter(artist,"now-art")
    }else{
        hover=true;
        gateHover()
    }
});
gateHover();

//图片滚动
var n=0;
var imgScroll=function(obj){
    var objWidth=obj.find("li").width()*3+50;
    obj.find("ul").width(objWidth);
    obj.on("mousewheel",function(){
        var scroll;
        if(gate.hasClass("now-dev")||gate.hasClass("now-art")) {
            scroll=true
        }else{
            scroll=false
        }
            e = window.event || e;
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.deltaY || -e.detail)));
            var width = obj.find(".imgs").width();
            var speed = 100;
            var endN = Math.floor((objWidth - width) / speed);
            var scrollspeed = (width - 200) / endN;
            console.log(scrollspeed);
            if (scroll) {
                if (delta < 0) {
                    n += 1;
                } else {
                    n--;
                }
                if (n > endN) {
                    n = endN
                }
                if (n < 0) {
                    n = 0
                }
                obj.find("ul").css("transform", "translateX(-" + speed * n + "px)");
                obj.find(".scrollBar").css("transform", "translateX(" + scrollspeed * n + "px)");

                console.log(n);
            }
    });
};
imgScroll(developer);
imgScroll(artist);
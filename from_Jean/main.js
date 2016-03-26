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
//左边图片滚动
var n=0;
var developerWidth=developer.find("li").width()*3+50;
developer.find("ul").width(developerWidth);
developer.on("mousewheel",function(){
        e = window.event || e;
    var delta = Math.max(-1, Math.min(1,
        (e.wheelDelta || -e.deltaY || -e.detail)));
    var width=$(".imgs").width();
    var speed=100;
    var radio=width/developerWidth;
    //var scrollspeed=speed*radio;
    console.log(developerWidth);
    var scroll=true;
    if(scroll) {
        if (delta < 0) {
            n+=1;
        } else {
            n--;
        }
     console.log(n);
     developer.find("ul").css("transform","translateX(-"+speed*n+"px)");
     developer.find(".scrollBar").css("transform","translateX("+speed*n+"px)");
        if(n>15){
            n=15
        }
        if(n<-1){
            n=0
        }
    }
});
//右边图片滑动

var artistWidth=artist.find("li").width()*3+50;
artist.find("ul").width(artistWidth);
artist.on("mousewheel",function(){
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1,
        (e.wheelDelta || -e.deltaY || -e.detail)));
    var width=$(".imgs").width();
    var speed=100;
    var radio=width/developerWidth;
    var scroll=true;
    if(scroll) {
        if (delta < 0) {
            n+=1;
        } else {
            n--;
        }
        artist.find("ul").css("transform","translateX(-"+speed*n+"px)");
        artist.find(".scrollBar").css("transform","translateX("+speed*n+"px)");
        if(n>15){
            n=15
        }
        if(n<-1){
            n=0
        }
    }
});
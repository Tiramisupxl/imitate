var gate=$("#gate");
var developer=$("#developer");
var artist=$("#artist");
var developerPage=$("#developerPage");
var artistPage=$("#artistPage");
//页面一进来的鼠标滑动效果
var hover=true;
var gateHover=function(){
    console.log(hover);
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

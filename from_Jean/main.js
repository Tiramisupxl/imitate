var developer=$("#developer");
var artist=$("#artist");
//页面一进来的鼠标滑动效果
developer.on("mouseover",function(){
    $(this).width("65%");
    $(this).find(".gate-left").addClass("active");
    artist.find(".gate-right").removeClass("active");
});
artist.on("mouseover",function(){
    developer.width("50%");
    $(this).find(".gate-right").addClass("active");
    developer.find(".gate-left").removeClass("active");
});

//点击developer出现图片页
var develpoerPointer=$(".gate-left");
develpoerPointer.on("click",function(){
    //alert("yes");
    developer.off("mouseover");
    artist.off("mouseover");
    $(this).fadeOut();
    developer.find(".centerbox").fadeOut();
    $(".gate-right").css({
        "width":"25px",
        "left":"90%",
        "overflow":"hidden"
    });
    developer.width("90%");
    $(".developer-imgs").show().css("opacity","1")
    });


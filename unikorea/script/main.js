$(function(){
    $(".gnb > ul > li,.lnb").hover(function(){
      $(".lnb").stop().slideDown();  
    },function(){
      $(".lnb").stop().slideUp();   
    });
   
    function nextani(){
        $(".ban").animate({marginLeft:"-100%"},500,function(){
            $(".ban li").eq(0).appendTo($(".ban"));
            $(".ban").css({marginLeft:"0"});
        });
    }
var interval = setInterval(nextani,6000);   
    
    function nextani1(){
        $(".ban2").animate({marginLeft:"-100%"},500,function(){
            $(".ban2 li").eq(0).appendTo($(".ban2"));
            $(".ban2").css({marginLeft:"0"});
        });
    }
var interval = setInterval(nextani1,4000);
});
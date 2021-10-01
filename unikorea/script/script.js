/*$(function(){
   function nextani(){
       $(".ban").not(":animated").animate({marginLeft:"-724px"},500,function(){
        $(".ban li").eq(0).appendTo(".ban");
        $(".ban").css({marginLeft:"0"});
    });   
   }
   var interval = setInterval(nextani, 3000);
});*/
$(function(){
       function nextani(){
           $(".ban").animate({marginLeft:"-724px"},500,function(){
            $(".ban li").eq(0).appendTo(".ban");
            $(".ban").css({marginleft:"0"});
        });   
       }
var interval = setInterval(nextani, 3000);
  
});


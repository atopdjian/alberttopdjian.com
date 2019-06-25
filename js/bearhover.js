$(document).ready(function(){
     $(".bear").mouseover(function(){
         $(".albert").css("display", "none");
       $(".albert-hover").css("display", "inline");
     });
   $(".bear").mouseout(function(){
         $(".albert").css("display", "inline");
       $(".albert-hover").css("display", "none");
     });
});
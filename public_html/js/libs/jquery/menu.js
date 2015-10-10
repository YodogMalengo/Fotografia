
$(function(){
    $(".about").hide();
    $(".work").hide();
    $(".contact").hide();
    $(".top").hide();  
 
});
$(function(){
   
    $('#master a').click(function(){
    var id=$(this).attr('id');
    $("."+id).show("slow");
   });
  
});
 $(function(){
        $('#master a').blur(function(){
    var id=$(this).attr('id');
    $("."+id).hide();
       
   });
});
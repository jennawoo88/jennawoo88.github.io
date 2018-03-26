$(document).ready(function() {
  setTimeout(function(){
    $(".wake-up").addClass("alarming"); 
    $("button").addClass("alarming");
  }, 5000);

  $(".button").click(function() { 
  	$(".wake-up").removeClass("alarming");
    $("button").removeClass("alarming");
  });

});
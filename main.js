$(document).ready(function(){
    var myHref1 = $('.myHref1');
    var myHref2 = $('.myHref2');
    var myHref3 = $('.myHref3');
    var myHref4 = $('.myHref4');
      
      myHref1.on('click',function(){
        $(location).attr('href', "./SnakeGame/Game1.html");
    });
      myHref2.on('click',function(){
        $(location).attr('href', "./SnakeGame/Game1.html");
    });
      myHref3.on('click',function(){
        $(location).attr('href', "./SnakeGame/Game1.html");
    });
      myHref4.on('click',function(){
      $(location).attr('href', "./SnakeGame/Game1.html");
    });
  
  
    $( ".scroll-me" ).click(function() {
        var x = $(window).scrollTop();
        $('html, body').animate({ scrollTop: x + 1000 }) 
    });

    $( ".scroll-me-2" ).click(function() {
        var x = $(window).scrollTop();
        $(window).scrollTop(x+600);
    });
  
  });
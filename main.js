$(document).ready(function(){
    var myHref1 = $('.myHref1');
    var myHref2 = $('.myHref2');
    var myHref3 = $('.myHref3');
    var myHref4 = $('.myHref4');

    var myHref5 = $('.myHref5');
    var myHref6 = $('.myHref6');
    var myHref7 = $('.myHref7');
    var myHref8 = $('.myHref8');
    var myHref9 = $('.myHref9');
    var myHref10 = $('.myHref10');
      
    myHref1.on('click',function(){
        $(location).attr('href', "https://www.linkedin.com/in/eduard-akhrymenia-34074822b");
    });
      myHref2.on('click',function(){
        $(location).attr('href', "https://Instagram.com/sunny_gummi");
    });
      myHref3.on('click',function(){
        $(location).attr('href', "https://vk.com/dedli_parkour_killer_dark_brawl");
    });
      myHref4.on('click',function(){
      $(location).attr('href', "https://github.com/Edward-Radzinski");
    });

    myHref5.on('click',function(){
      $(location).attr('href', "./SnakeGame/Game1.html");
  });
    myHref6.on('click',function(){
      $(location).attr('href', "./TicTacToe/index.html");
  });
    myHref7.on('click',function(){
      $(location).attr('href', "./Clicker/index.html");
  });
    myHref8.on('click',function(){
    $(location).attr('href', "https://github.com/Edward-Radzinski/RocketMans");
  });
    myHref9.on('click',function(){
    $(location).attr('href', "https://github.com/Edward-Radzinski/Race-The-Sun-Clone");
  });
    myHref10.on('click',function(){
    $(location).attr('href', "https://github.com/Edward-Radzinski/ChickenRunner");
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

  // add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
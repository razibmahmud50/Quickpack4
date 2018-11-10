/*====help js here========*/
//navbar color change after scrolling
 $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar").css("background" , "linear-gradient(45deg,rgba(74,1,72,0.8) 35%,rgba(192,72,72,0.8) 100%)");
    }

    else{
      $(".navbar").css("background" , "transparent");   
    }
  })
